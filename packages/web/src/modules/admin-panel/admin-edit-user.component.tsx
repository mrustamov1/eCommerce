import { useState } from "react";
import { Input } from "../../ui-components/Input/input.component";
import { AdminType } from "../../types/admin.type";
import { Button } from "../../ui-components/button/button.component";
import { useModal } from "../../ui-components/modal";
interface AdminEditUserProps {
  user: AdminType;
}

export function AdminEditUser({ user }: AdminEditUserProps) {
  const [edituser, setEditUser] = useState<AdminType>(user);
  const modal = useModal();

  async function handleEdit() {
    if (!edituser) return;
    try {
      const response = await fetch("http://localhost:9090/api/user/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(edituser),
      });

      if (!response.ok) {
        console.log("Something went wrong");
        return false;
      }

      await response.json();
      modal.close();
      return true
    } catch (error) {
      console.log(error);
    }
  }

  return (
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
        value={edituser?.surname || ""}
        onChange={(e) => {
          setEditUser((prev) =>
            prev ? { ...prev, surname: e.target.value } : prev
          );
        }}
      />
      <Input
        type="email"
        value={edituser?.email || ""}
        onChange={(e) => {
          setEditUser((prev) =>
            prev ? { ...prev, email: e.target.value } : prev
          );
        }}
      />
      <Button title="Save Changes" mode="edit" onClick={handleEdit} />
      <Button title="Cancel" mode="danger" onClick={() => setEditUser(user)} />
    </div>
  );
}
