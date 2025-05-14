import { useState } from "react";
import { Input } from "../../ui-components/Input/input.component";
import { AdminType } from "../../types/admin.type";
import { Button } from "../../ui-components/button/button.component";
import { useModal } from "../../ui-components/modal";

type AdminEditUserProps = {
  user: AdminType;
};

export function AdminEditUser({ user }: AdminEditUserProps) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const [edituser, setEditUser] = useState<AdminType>(user);
  const modal = useModal();

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

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
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  // ---------------------------------------------------------------------------
  return (
    <section className="p-5">
      <div className="gap-3 flex flex-col">
        <Input
          label="Name"
          type="text"
          value={edituser?.name || ""}
          onChange={(e) =>
            setEditUser((prev) =>
              prev ? { ...prev, name: e.target.value } : prev
            )
          }
        />
        <Input
          label="Surname"
          type="text"
          value={edituser?.surname || ""}
          onChange={(e) => {
            setEditUser((prev) =>
              prev ? { ...prev, surname: e.target.value } : prev
            );
          }}
        />
        <Input
          label="Email Address"
          type="email"
          value={edituser?.email || ""}
          onChange={(e) => {
            setEditUser((prev) =>
              prev ? { ...prev, email: e.target.value } : prev
            );
          }}
        />
        <div className="flex justify-center gap-5">
          <Button
            className="w-full"
            title="Save Changes"
            mode="edit"
            onClick={handleEdit}
          />
          <Button
            className="w-full"
            title="Cancel"
            mode="danger"
            onClick={() => modal.close()}
          />
        </div>
      </div>
    </section>
  );
}
