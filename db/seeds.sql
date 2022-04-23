INSERT INTO departments (department_name)
VALUES
('Human Resources'),
('Production'),
('Engineering'),
('Quality Assurance');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Human Resources Manager', 100000, 1),
    ('Human Resources Assistance', 70000, 1),
    ('Front Desk', 45000, 1),

    ('Assembler Level C', 80000, 2),
    ('Assembler Level B', 60000, 2),
    ('Assembler Level A', 40000, 2),

    ('Mechanical Engineer', 95000, 3),
    ('Structural Engineer', 90000, 3),
    ('Software Engineer', 75000, 3),

    ('Quality Assurance Manager', 100000, 4),
    ('Quality Assurance Lead', 70000, 4),
    ('Quality Assurance Level C', 60000, 4);

    INSERT INTO employees(first_name, last_name, role_id, manager_id)
    VALUES
    ('Mike', 'Tyson', 100, 01),
    ('Michael', 'Jordan', 101, 01),
    ('Donovan', 'Mitchell', 102, 01),

    ('Rudy', 'Gobert', 103, 02),
    ('Mia', 'Hamm', 104, 02),
    ('Aja', 'Wilson', 105, 02),

    ('Cam', 'Puck', 106, 03),
    ('Billy', 'Joggle', 107, 03),
    ('Jack', 'John', 108, 03),

    ('John', 'Jack', 109, 04),
    ('Marceline', 'Edge', 110, 04),
    ('Tucker', 'Edge', 111, 04);