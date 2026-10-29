export const normalize = (value) =>
    typeof value === "string"
        ? value
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
        : "";
