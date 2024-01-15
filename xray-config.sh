USERNAME=$1
PASSWORD=$2
PROJECT_KEY=$3
dir=$PWD
old="\\."
new="/"
path=$PWD"/target/xray-config"

ls $path > files.txt
while read f; do
  echo $f;
  curl -k -H "Content-Type:application/json" -X POST -u $USERNAME:$PASSWORD --data @$path/$f https://office1.tecombank.com

# #process push test cases to jira
# file_name="${f##*/}"
# file="${file_name%.*}"
# result=${file//$old/$new}
# curl -k -H "Content-Type:multipart/form-data" -X POST -u $USERNAME:$PASSWORD -F "file=@tcb-automation"



  done < files.txt