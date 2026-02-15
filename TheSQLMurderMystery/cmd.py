import tabulate as tb

print("The SQL Murder Mystery! - Evidence & Clues")
print("")
print("A: SELECT * FROM crime_scene_report WHERE date=='20180115' AND type='murder' AND city='SQL City'")

print("B1: SELECT * FROM person WHERE address_street_name=='Franklin Ave' AND name LIKE '%Annabel%'")
print("B2: SELECT * FROM person WHERE address_street_name=='Northwestern Dr' ORDER BY address_number DESC LIMIT 1;")

print("C1: SELECT * FROM interview WHERE person_id IN (16371, 14887);")
print("C2: SELECT * FROM interview WHERE person_id IN (16371, 14887) AND transcript LIKE '%mugshot%';")
