import os
import sys
import subprocess

schema_host = os.environ['DB_HOST']
schema_dbname = os.environ['DB_NAME']
schema_user = os.environ['DB_USER']
schema_password = os.environ['DB_PASSWORD']
schema_port = os.environ['DB_PORT']
schema_db_sql_path = os.environ['DB_PATH']

command = 'flyway migrate -locations=filesystem:/flyway/sql/migrations -user=%s -schemas=flyway -password=%s -url=jdbc:postgresql://%s:%s/%s' % (schema_user, schema_password, schema_host, schema_port, schema_dbname)
sys.stdout.flush()
print("########################################################")
subprocess.call(command, shell=True, stderr=subprocess.STDOUT)
sys.stdout.flush()
    
print("FINISHED APPLYING MIGRATIONS")