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