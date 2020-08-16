var potentialProgramData = [
  {
    Job: "Solar photovoltaic installers",
    degreeRequired: "High school diploma or equivalent",
    medianSalary: 44890,
    numberEmployee: 9700,
    percentageGrowth: 0.63,
    color: "white",
  },
  {
    Job: "Wind Turbine Technicians",
    degreeRequired: "Postsecondary nondegree award",
    medianSalary: 52910,
    numberEmployee: 6600,
    percentageGrowth: 0.57,
    color: "white",
  },
  {
    Job: "Home Health Aides and Personal Care Aides",
    degreeRequired: "High school diploma or equivalent",
    medianSalary: 24060,
    numberEmployee: 3253000,
    percentageGrowth: 0.36,
    color: "white",
  },
  {
    Job: "Occupational Therapy Assistants and Aides",
    degreeRequired: "Associate’s degree from an accredited program",
    medianSalary: 59200,
    numberEmployee: 51700,
    percentageGrowth: 0.31,
    color: "white",
  },
  {
    Job: "Information Security Analysts",
    degreeRequired: "Bachelor's",
    medianSalary: 99730,
    numberEmployee: 112300,
    percentageGrowth: 0.32,
    color: "green",
  },
  {
    Job: "Physician Assistants",
    degreeRequired: "Master's",
    medianSalary: 112260,
    numberEmployee: 118800,
    percentageGrowth: 0.31,
    color: "white",
  },
  {
    Job: "Mathematicians and Statisticians/Data Science",
    degreeRequired: "Master's",
    medianSalary: 92030,
    numberEmployee: 47300,
    percentageGrowth: 0.3,
    color: "white",
  },
  {
    Job: "Nurse Anesthetists, Nurse Midwives, and Nurse Practitioners",
    degreeRequired: "Master's",
    medianSalary: 115800,
    numberEmployee: 240700,
    percentageGrowth: 0.26,
    color: "green",
  },
  {
    Job: "Speech-Language Pathologists",
    degreeRequired: "Master's",
    medianSalary: 79120,
    numberEmployee: 153700,
    percentageGrowth: 0.27,
    color: "white",
  },
  {
    Job: "Physical Therapist Assistants and Aides",
    degreeRequired: "Associate’s degree from an accredited program",
    medianSalary: 48990,
    numberEmployee: 148200,
    percentageGrowth: 0.26,
    color: "white",
  },
  {
    Job: "Genetic Counselors",
    degreeRequired: "Master's",
    medianSalary: 81880,
    numberEmployee: 3000,
    percentageGrowth: 0.27,
    color: "white",
  },
  {
    Job: "Operations Research Analysts",
    degreeRequired: "Bachelor's",
    medianSalary: 84810,
    numberEmployee: 109700,
    percentageGrowth: 0.26,
    color: "green",
  },
  {
    Job: "Information Security Analysts",
    degreeRequired: "Bachelor's",
    medianSalary: 99730,
    numberEmployee: 112300,
    percentageGrowth: 0.32,
    color: "green",
  },
  {
    Job: "Software Developers",
    degreeRequired: "Bachelor's",
    medianSalary: 105590,
    numberEmployee: 1365500,
    percentageGrowth: 0.21,
    color: "green",
  },
  {
    Job: "Operations Research Analysts",
    degreeRequired: "Bachelor's",
    medianSalary: 84810,
    numberEmployee: 109700,
    percentageGrowth: 0.26,
    color: "green",
  },
  {
    Job: "Fire Inspectors",
    degreeRequired: "Bachelor's",
    medianSalary: 60230,
    numberEmployee: 15200,
    percentageGrowth: 0.08,
    color: "white",
  },
  {
    Job: "Physical Therapists",
    degreeRequired: "Bachelor's",
    medianSalary: 89440,
    numberEmployee: 247700,
    percentageGrowth: 0.22,
    color: "white",
  },
  {
    Job: "Postsecondary Teachers",
    degreeRequired: "Doctorate/Master's/Bechelor's",
    medianSalary: 79540,
    numberEmployee: 1350700,
    percentageGrowth: 0.11,
    color: "white",
  },
  {
    Job: "Phlebotomists",
    degreeRequired: "Postsecondary nondegree award",
    medianSalary: 35510,
    numberEmployee: 128300,
    percentageGrowth: 0.23,
    color: "white",
  },
  {
    Job: "Medical Assistants",
    degreeRequired: "Postsecondary nondegree award",
    medianSalary: 34800,
    numberEmployee: 686600,
    percentageGrowth: 0.23,
    color: "white",
  },
  {
    Job: "Actuaries",
    degreeRequired: "Bachelor's",
    medianSalary: 108350,
    numberEmployee: 25000,
    percentageGrowth: 0.2,
    color: "white",
  },
  {
    Job: "Athletic Trainers",
    degreeRequired: "Bachelor's",
    medianSalary: 48440,
    numberEmployee: 31100,
    percentageGrowth: 0.19,
    color: "white",
  },
  {
    Job: "Postsecondary Teachers",
    degreeRequired: "Bachelor's",
    medianSalary: 79540,
    numberEmployee: 1350700,
    percentageGrowth: 0.11,
    color: "white",
  },
  {
    Job: "Clinical Laboratory Technologists and Technicians",
    degreeRequired: "Bachelor's",
    medianSalary: 53120,
    numberEmployee: 331700,
    percentageGrowth: 0.11,
    color: "white",
  },
  {
    Job: "Management Analysts",
    degreeRequired: "Bachelor's",
    medianSalary: 85260,
    numberEmployee: 876300,
    percentageGrowth: 0.14,
    color: "green",
  },
  {
    Job: "Market Research Analysts",
    degreeRequired: "Bachelor's",
    medianSalary: 63790,
    numberEmployee: 681900,
    percentageGrowth: 0.2,
    color: "green",
  },
  {
    Job: "Medical and Health Services Managers",
    degreeRequired: "Bachelor's",
    medianSalary: 100980,
    numberEmployee: 406100,
    percentageGrowth: 0.18,
    color: "white",
  },
  {
    Job: "Coaches and Scouts",
    degreeRequired: "Bachelor's",
    medianSalary: 34840,
    numberEmployee: 290100,
    percentageGrowth: 0.11,
    color: "white",
  },
  {
    Job: "Financial Managers",
    degreeRequired: "Bachelor's",
    medianSalary: 129890,
    numberEmployee: 653600,
    percentageGrowth: 0.16,
    color: "green",
  },
  {
    Job: "Interpreters and Translators",
    degreeRequired: "Bachelor's",
    medianSalary: 51830,
    numberEmployee: 76100,
    percentageGrowth: 0.19,
    color: "white",
  },
  {
    Job: "Social and Community Service Managers",
    degreeRequired: "Bachelor's",
    medianSalary: 67150,
    numberEmployee: 168800,
    percentageGrowth: 0.13,
    color: "white",
  },
  {
    Job: "Petroleum engineering",
    degreeRequired: "Bachelor's",
    medianSalary: 137720,
    numberEmployee: 33500,
    percentageGrowth: 0.03,
    color: "red",
  },
  {
    Job: "Industrial Designers",
    degreeRequired: "Bachelor's",
    medianSalary: 68890,
    numberEmployee: 43900,
    percentageGrowth: 0.03,
    color: "red",
  },
  {
    Job: "Multimedia Artists and Animators",
    degreeRequired: "Bachelor's",
    medianSalary: 75270,
    numberEmployee: 71600,
    percentageGrowth: 0.04,
    color: "red",
  },
  {
    Job: "Probation Officers and Correctional Treatment Specialists",
    degreeRequired: "Bachelor's",
    medianSalary: 54290,
    numberEmployee: 91600,
    percentageGrowth: 0.03,
    color: "red",
  },
  {
    Job: "Dentists",
    degreeRequired: "Bachelor's",
    medianSalary: 159200,
    numberEmployee: 155000,
    percentageGrowth: 0.07,
    color: "red",
  },
  {
    Job: "Sales Engineers",
    degreeRequired: "Bachelor's",
    medianSalary: 103900,
    numberEmployee: 66700,
    percentageGrowth: 0.06,
    color: "red",
  },
];