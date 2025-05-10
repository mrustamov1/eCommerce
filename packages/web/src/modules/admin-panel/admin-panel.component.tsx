import { Button } from "../../ui-components/button/button.component";

const users = [
  {
    id: 1,
    name: "Muhmmad",
    surname: "Rustamov",
    email: "mr.rusttamov@gmail.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Muhmmad",
    surname: "Rustamov",
    email: "mr.rusttamov@gmail.com",
    role: "Admin",
  },
  {
    id: 3,
    name: "Muhmmad",
    surname: "Rustamov",
    email: "mr.rusttamov@gmail.com",
    role: "Admin",
  },
  // Add more users here to test the border behavior
];

export function Admin() {
  const showBorders = users.length > 1;

  return (
    <section className="flex justify-center items-start max-w-[1300px] w-full mx-auto mt-28 px-4">
      <div className="overflow-x-auto w-full border-1 border-[#212121] rounded-xl">
        <table className="w-full table-auto text-left border-collapse">
          <thead className="bg-gray-100 border-b-1 border-[#212121]">
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
                  <Button title="Edit" mode="edit" />
                  <Button title="Delete" mode="danger" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
