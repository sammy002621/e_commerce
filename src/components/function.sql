-- CREATE OR REPLACE FUNCTION add (number num1)

-- RETURNS INT
-- AS $$
-- DECLARE 
 


-- BEGIN


-- END;
-- LANGUAGE PL/PGSQL

-- INSERT INTO employee (firstname, lastname, email, hire_date,salary)
-- VALUES ('Jane', 'uwamahoro', 'jane.u@gmail.com', '2024-05-11',60000);
-- ('John', 'Doe', 'john.doe@example.com', '1985-01-11',70000),
-- ('patric', 'Niyonizeye', 'patric.doe@example.com', '2024-05-12',50000),
-- ('John', 'Kabanda', 'john.doe@example.com', '2024-05-13',70000),
-- ('Olive', 'Kanyana', 'olive.k@example.com', '2024-05-14'10000);
-- ('Fred', 'Ngendo', 'fred.n@example.com', '2024-05-14'10000);


-- Connect to the database
\c your_database_name

-- Create the function
CREATE OR REPLACE FUNCTION get_employee_count()
RETURNS INTEGER AS $$
DECLARE
    employee_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO employee_count FROM employees;
    RETURN employee_count;
END;
$$ LANGUAGE plpgsql;

-- Test the function
SELECT get_employee_count();


CREATE OR REPLACE FUNCTION add_employee(
    p_firstname VARCHAR,
    p_lastname VARCHAR,
    p_email VARCHAR,
    p_hire_date DATE,
    p_salary INTEGER
)
RETURNS VOID AS $$
BEGIN
    INSERT INTO employee (firstname, lastname, email, hire_date, salary)
    VALUES (p_firstname, p_lastname, p_email, p_hire_date, p_salary);
END;
$$ LANGUAGE plpgsql;


