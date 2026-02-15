### SQL Mystery Evidence
```
SELECT * FROM crime_scene_report WHERE date=='20180115' AND type='murder' AND city='SQL City'
```

Security footage shows that there were 2 witnesses. The first witness lives at the last house on "Northwestern Dr". The second witness, named Annabel, lives somewhere on "Franklin Ave".

```
SELECT * FROM person WHERE address_street_name=='Northwestern Dr' ORDER BY address_number DESC LIMIT 1;
```
