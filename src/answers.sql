1. SELECT email FROM customers ORDER BY email;

2. SELECT id FROM orders
    WHERE customer_id =
        (SELECT id from customers WHERE fname = 'Elizabeth' AND lname = 'Crocker');

3. SELECT SUM(num_cupcakes) FROM orders WHERE processed = 'f';

4. SELECT name, SUM(num_cupcakes) 
    FROM orders
    LEFT JOIN cupcakes
    USING (id)
    GROUP BY name;

    SELECT dept, COUNT(id) AS num_emps, SUM(salary) AS total_salary
FROM departments
  LEFT JOIN employees
    USING (dept_code)
GROUP BY dept;


        SELECT dept, COUNT(*) AS num_emps, SUM(salary) AS total_salary
FROM departments
  LEFT JOIN employees
    USING (dept_code)
GROUP BY dept;