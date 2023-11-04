const folderData = {
  name: "root",
  isFolder: true,
  structure: [
    {
      name: "public",
      isFolder: true,
      structure: [
        { name: "index.html", isFolder: false },
        { name: "app.js", isFolder: false },
      ],
    },
    {
      name: "src",
      isFolder: true,
      structure: [
        {
          name: "components",
          isFolder: true,
          structure: [
            { name: "module1.js", isFolder: false },
            { name: "module2.js", isFolder: false },
          ],
        },
        { name: "index.js.js", isFolder: false },
      ],
    },
    { name: "package.json" },
    { name: "config.env" },
  ],
};

export default folderData;
