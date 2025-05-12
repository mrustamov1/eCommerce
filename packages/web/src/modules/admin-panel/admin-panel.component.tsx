import { useEffect, useState } from "react";
import { Button } from "../../ui-components/button/button.component";
import { UserType } from "../../types/user.type";
import { Input } from "../../ui-components/Input/input.component";

type User = {
  id: number;
  name: string;
  surname: string;
  email: string;
  role: string;
};

export function Admin() {
  const [users, setUsers] = useState<User[]>([]);
  const [edituser, setEditUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:9090/api/user/get");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId: number) => {
    try {
      const response = await fetch("http://localhost:9090/api/user/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId }),
      });

      if (response.ok) {
        setUsers(users.filter((user) => user.id !== userId)); // Remove the deleted user from the state
        alert(`User with id ${userId} deleted successfully.`);
      } else {
        alert("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user.");
    }
  };

  const handleEdit = async () => {
    if (!edituser) return;
    try {
      const response = await fetch("http://localhost:9090/api/user/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(edituser),
      });

      const res = await response.json();

      setUsers((prev) => prev.map((u) => (u.id === res.id ? res : u)));
      setEditUser(null);
      console.log("User updated successfully", res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (field: keyof UserType, value: string) => {
    if (!edituser) return;
    setEditUser({ ...edituser, [field]: value });
  };

  const showBorders = users.length > 1;

  return (
    <div className="bg-[#fff] w-full h-[100vh]">
      <section className="flex justify-center items-start max-w-[1400px] w-full mx-auto pt-28 px-4">
        <div className="overflow-x-auto w-full border-1 border-[#212121] rounded-xl">
          <div className="flex justify-between p-5">
            <h2 className="text-2xl font-semibold">Users List</h2>
            <Button title="Add user" mode="edit" />
          </div>
          <table className="w-full table-auto text-left border-collapse">
            <thead className="border-y-1 border-[#212121]">
              <tr>
                <th className="px-4 py-3">№</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Surname</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className={`${showBorders ? "divide-y divide-black" : ""}`}>
              {users.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.surname}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.role}</td>
                  <td className="px-4 py-3 space-x-2">
                    <Button
                      onClick={() => setEditUser(user)}
                      title="Edit"
                      mode="edit"
                    />
                    <Button
                      title="Delete"
                      mode="danger"
                      onClick={() => handleDelete(user.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {edituser && (
            <div>
              <Input
                type="text"
                value={edituser?.name || ""}
                onChange={(e) =>
                  setEditUser((prev) =>
                    prev ? { ...prev, name: e.target.value } : prev
                  )
                }
              />
              <Input
                type="text"
                value={edituser.surname || ""}
                onChange={(e) => {
                  setEditUser((prev) =>
                    prev ? { ...prev, surname: e.target.value } : prev
                  );
                }}
              />
              <Input
                type="email"
                value={edituser.email || ""}
                onChange={(e) => {
                  setEditUser((prev) =>
                    prev ? { ...prev, email: e.target.value } : prev
                  );
                }}
              />
              <Button title="Save Changes" mode="edit" onClick={handleEdit} />
              <Button
                title="Cancel"
                mode="danger"
                onClick={() => setEditUser(null)}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
