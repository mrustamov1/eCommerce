import { useState } from "react";
import { AdminType } from "../../types/admin.type";
import { useModal } from "../../ui-components/modal";
import { useGetUsers } from "../../hooks/fetch.hook";
import { AdminEditUser } from "./admin-edit-user.component";
import { Button } from "../../ui-components/button/button.component";

export function Admin() {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const [users, setUsers] = useState<AdminType[]>([]);
  const modal = useModal();

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  const { data } = useGetUsers();

  async function handleDelete(userId: number) {
    try {
      const response = await fetch("http://localhost:9090/api/user/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId }),
      });

      if (response.ok) {
        setUsers(users.filter((user) => user.id !== userId));
        alert(`User with id ${userId} deleted successfully.`);
      } else {
        alert("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user.");
    }
  }

  function editUser(user: AdminType) {
    modal.open({
      component: <AdminEditUser user={user} />,
      hideCloseBtn: true,
      closeOnOutsideClick: true,
    });
  }

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
              {data?.map((user: AdminType, index: number) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.surname}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.role}</td>
                  <td className="px-4 py-3 space-x-2">
                    <Button
                      onClick={() => editUser(user)}
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
        </div>
      </section>
    </div>
  );
}
