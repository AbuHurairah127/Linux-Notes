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
    command: "vi name.txt",
    use: "To open file in CLI text editor",
    termination:
      "to terminate the process press ctrl + c  and the write ':wq' to save and quit",
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
  {
    command: "apt-get install packageName",
    use: "to install a software when u are in super user /admin mode",
  },
  {
    command: "sudo apt-get install packageName",
    use: "to install a software when u are in normal user mode",
  },
  //Scripting
  {
    command: "touch name.sh",
    use: "script is written for something we want to repeat multiple times or every time we start our shell",
    shellIndicator: "#!/bin/bash",
  },
  //Permissions
  {
    0: "Zero means no permission",
    1: "One means executable permissions",
    2: "Two means write permissions",
    4: "Four means read permissions",
    "-rw-rw-r--":
      "1st is for file owner and second is for group and third is for other users",
  },
  {
    command: "ls -l",
    use: "to print the permissions list",
  },
  {
    command: "chmod",
    use: "to change the permissions for file access",
    usageWay:
      "chmod numValForFileOwner|numValForGroup|numValForOtherUsers fileName  e.g. chmod 777 abc.sh",
  },
  // general Commands
  {
    commands: "uptime",
    use: "it is used to check for how much time machine is running",
  },
  {
    commands: "uname",
    use: "it is used to check which operating system is being used",
  },
  {
    commands: "uname -srv",
    use: "it is used to check which operating system is being used ,its release and its version",
  },
];
