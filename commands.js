const commands = {

    help: {
        output:
`Available Commands

pwd
ls
cd
mkdir
touch
cp
mv
rm
find
tree
clear`,
        description: "Displays all available commands."
    },

    pwd: {
        output: "/home/student",
        description: "Prints the current working directory."
    },

    ls: {
        output:
`Documents
Downloads
Desktop`,
        description: "Lists files and directories."
    },

    tree: {
        output:
`.
├── Documents
├── Downloads
└── Desktop`,
        description: "Displays the directory tree."
    }

};