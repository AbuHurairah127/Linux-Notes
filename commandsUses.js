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
  {
    command: "mkdir DirName",
    use: "Make Directory",
    useCase1: "mkdir path (To make directory to a specific directory)",
  },
  {
    command: "touch name.txt",
    use: "To make a new text file",
  },
  {
    command: "mv fileName Path",
    use: "To move a file to a specific directory",
  },
  {
    command: "mv fileName fileName",
    use: "To rename a file.",
  },
  {
    command: "cp filename/filepath path",
    use: "To copy file to specific directory",
  },
  {
    command: "clear",
    use: "Clear the screen of terminal",
  },
  {
    command: "history",
    use: "To get the history of the terminal that which command we have run",
  },
  {
    command: "rm filename.png",
    use: "Remove a file",
  },
  {
    command: "rmdir directoryName",
    use: "Remove a directory",
  },
  {
    command: "man commandName",
    use: "To open a manual/docs for a specific command",
  },
  {
    command: "find path(from root) filename",
    use: "To find a file in the specific directory",
    useCase2:
      "if * is written at the end of file name , finds a file in the specific directory and show all instances of its existence",
  },
  {
    command: "find path(from root) -name filename",
    use: "provides a path to the file from root",
  },
  {
    command: "sudo su",
    use: "to login as a super user/admin",
  },
  {
    command: "exit",
    use: "to return back from super user/admin to normal user",
  },
];
