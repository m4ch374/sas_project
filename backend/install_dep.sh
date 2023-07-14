#!/bin/bash 

if [ "$#" -ne 0 ]
then
    printf "error: invalid syntax: just do \e[0;32msh install_dep.sh\e[0m and you'll be all g\n" >&2
    exit 1
fi 

echo "Installing Python dependencies"
echo ""

echo "################################################################"
echo "#                                                              #"
echo "# NOTE: WE EXPECT YOU TO ALREADY HAVE PYTHON AND PIP INSTALLED #"
echo "#                                                              #"
echo "################################################################"

echo ""

while IFS= read -r dep
do 
    colored_output="\e[0;32m$dep\e[0m"
    echo "Installing: $colored_output"
    echo "This may take a few mins to install, its ok if it's stuck in \"Collecting\""
    echo ""
    pip install "$dep"
done < "dependencies.txt"

echo "You're all g!"
