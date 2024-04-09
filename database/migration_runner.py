'''
Migrations script runner using Flyway
'''
import os
import sys
import subprocess

db_host = os.environ['DB_HOST']
db_name = os.environ['DB_NAME']
db_user = os.environ['DB_USER']
db_password = os.environ['DB_PASSWORD']
db_port = os.environ['DB_PORT']

command = f'flyway migrate -locations=filesystem:/flyway/sql/migrations \
          -user={db_user} -schemas=flyway -password={db_password} \
          -url=jdbc:postgresql://{db_host}:{db_port}/{db_name}'
sys.stdout.flush()

print("########################################################")
subprocess.call(command, shell=True, stderr=subprocess.STDOUT)
sys.stdout.flush()

print("Finished Applying Flyway Migrations")

while(1):
  pass