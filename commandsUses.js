const LinuxCommands = [
  {
    command: "ls",
    use: "List Files of Current Directory",
  },
  {
    command: "pwd",
    use: "Print Working Directory (Print the path to the specific directory in which you are working)",
  },
  {
    command: "cd",
    use: "Change Directory",
    useCase1: "cd /  (Move to the root path of the linux machine)",
    useCase2: "cd .. (Move one directory backward)",
    useCase3: "cd ../.. (Move two directories backward)",
    useCase4:
      "cd FolderName (Move to  the directory which name is written if the directory is present in the specific directory in which you are working)",
    useCase5: "cd path (Move to the specific path if the path is true)",
  },
];
