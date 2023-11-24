"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

function RemoveBtn({ id, title }) {
  const router = useRouter();

  const handleClick = async () => {
    const confirmed = confirm(`Are you sure you want to delete: ${title}?`);

    if (confirmed) {
      try {
        const res = await fetch(`/api/topics?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          router.refresh();
        } else {
          throw new Error(`Error deleting ${title}.`);
        }
      } catch (error) {}
    }
  };
  return (
    <button onClick={handleClick}>
      <HiOutlineTrash size={24} className="text-red-400" />
    </button>
  );
}

export default RemoveBtn;
