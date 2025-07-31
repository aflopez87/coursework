# Pit Stop

Welcome to the Pit Stop, a road-side no-nonsense full-service auto repair shop that's been
in the business for more than a century. They've kept pristine paper records of all the vehicles
that they've serviced, and you've been hired to do some data analysis as they digitize
their books.

## Initialize and connect to the database

Included in this repo is a `pit_stop.sql` file which will initialize a database on your
own computer with a sample set of vehicle records.

1. Run `psql -f pit_stop.sql`. This tells PostgreSQL to run the file, which will create
   the database and fill it with data. You should see a series of messages ending with
   `ALTER TABLE`.
2. Run `psql` to launch the interactive PostgreSQL terminal.
3. Run `\l` to see a list of databases on your computer. One of them should be named
   `pit_stop`.
4. Run `\c pit_stop` to connect to that database. You should receive a confirmation
   message.
5. Run `\conninfo` to get more information about your connection to the database.

## Examine the database

Now that you're connected to the `pit_stop` database, let's see what data it contains!

6. Run `\d` to list all of the tables in the connected database. You should see a single
   table named `vehicles`.
7. Run `\d vehicles` to get more details about the `vehicles` table. How many columns does
   `vehicles` have?
8. What is the type of the `color` column?
9. What is the type of the `date` column?
10. Can any of the columns have a null value?
11. Do any of the columns have a default value?

## Query the database with SQL

In order to communicate with the database, we have to write **Structured Query Language (SQL)**.
A SQL **query**, or **statement**, is made up of several **clauses**.

For example, this SQL query contains the clauses `SELECT id` and `FROM vehicles`.

```sql
SELECT id FROM vehicles;
```

> [!NOTE]
>
> SQL is actually case-insensitive! `select id from vehicles;` is also a completely valid
> SQL statement. Capitalizing clauses is a common _stylistic_ convention that can help
> readers quickly identify and distinguish keywords.

> [!WARNING]
>
> Be mindful of the semicolon at the end of the SQL **statement**!
> Your queries will not work if you forget the semicolon.

12. Run the SQL query above. What is the output? You can press `q` to exit the list view.
13. What is the output of `SELECT id, model FROM vehicles;`?
14. Write the SQL query to get the color, fuel, and manufacturer of every vehicle.
15. What is the output of `SELECT * FROM vehicles LIMIT 10;`?
16. Write the SQL query to:
    1. Get the id, type, and date of the first 20 vehicles.
    2. Get all columns of the first 5 vehicles.
    3. Get the date, model, and color of all vehicles.
    4. Get the id, color, and fuel of the first 50 vehicles.
    5. Get all columns of all vehicles.

## Filter the results

Most of the time, we don't actually want all the **records** from a table. Instead, we
want to filter out the records based on some criteria. This can be accomplished with the
`WHERE` clause.

```sql
SELECT * FROM vehicles WHERE color = 'lime';
```

> [!IMPORTANT]
>
> In SQL, there is a difference between single quotes `'` and double quotes`"`!
> Single quotes are used around strings, such as `'lime'` or `'Electric'`,
> while double quotes are used around **identifiers**, such as the name of a
> table or a column.

17. What is the output of the SQL query above?
18. What is the output of `SELECT * FROM vehicles WHERE id <= 'D' AND fuel = 'Hybrid';`?
19. What is the output of `SELECT * FROM vehicles WHERE date BETWEEN '2020-01-01' AND '2022-01-01'`?
20. What is the output of `SELECT * FROM vehicles WHERE type LIKE 'Co%'`?
21. What is the output of `SELECT * FROM vehicles WHERE type LIKE 'co%'`?
22. What is the output of `SELECT * FROM vehicles WHERE type ILIKE 'co%'`?
23. What is the difference between `LIKE` and `ILIKE`?
24. `%` is a **wildcard** character used with `LIKE`. What does it do?
25. What is another wildcard character that can be used with `LIKE`?
26. Write the SQL query to:
    1. Select all columns from vehicles that are hatchbacks.
    2. Select the id, color, and model of vehicles that are green.
    3. Select the manufacturer and type of all vehicles that use either electric or diesel
       fuel. (_Hint:_ use `OR`)
    4. Select all columns of vehicles that visited the pit stop before the year 1990.
    5. Select all columns of vehicles that visited the pit stop in the year 2038.
    6. Select the color and type of all vehicles whose IDs start with the letter "P".
    7. Select the id, manufacturer, color, and type of all vehicles whose IDs end with the
       letter "K".
    8. Select all columns of vehicles whose IDs contain the number "11".