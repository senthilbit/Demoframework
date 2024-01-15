#!/bin/bash
USERNAME=$1
PASSWORD=$2
PROJECT_KEY=$3

echo "PWD ======>>>>>"$PWD
dir=$PWD
echo "dir ======>>>>>"$dir
path=$PWD"/target/xray-config"
cd $path
echo "path ======>>>>"$path
old="\\."
new="/"
for f in *; do


  file_name="${f##*/}"

  file_extention="${file_name##*.}"

  file="${file_name%.*}"


  result=${file//$old/$new}
  echo $dir/$result.feature
  curl -k -H "Content-Type:multipart/form-data" -X POST -u $USERNAME:$PASSWORD -F "file=@$dir/$result.feature" https://



  done


