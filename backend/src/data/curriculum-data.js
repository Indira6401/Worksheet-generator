/**
 * Curriculum data mapping for Board → Grade → Subject → Publisher → Topics
 * This provides a realistic hierarchical dataset for Indian CBSE and Cambridge boards.
 */

const curriculumData = {
  boards: [
    { id: 'cbse', name: 'CBSE' },
    { id: 'cambridge', name: 'Cambridge' }
  ],

  grades: {
    cbse: [
      { id: '1', name: 'Grade 1' },
      { id: '2', name: 'Grade 2' },
      { id: '3', name: 'Grade 3' },
      { id: '4', name: 'Grade 4' },
      { id: '5', name: 'Grade 5' },
      { id: '6', name: 'Grade 6' },
      { id: '7', name: 'Grade 7' },
      { id: '8', name: 'Grade 8' },
      { id: '9', name: 'Grade 9' },
      { id: '10', name: 'Grade 10' },
      { id: '11', name: 'Grade 11' },
      { id: '12', name: 'Grade 12' }
    ],
    cambridge: [
      { id: '1', name: 'Grade 1' },
      { id: '2', name: 'Grade 2' },
      { id: '3', name: 'Grade 3' },
      { id: '4', name: 'Grade 4' },
      { id: '5', name: 'Grade 5' },
      { id: '6', name: 'Grade 6' },
      { id: '7', name: 'Grade 7' },
      { id: '8', name: 'Grade 8' },
      { id: '9', name: 'Grade 9 (IGCSE)' },
      { id: '10', name: 'Grade 10 (IGCSE)' },
      { id: '11', name: 'Grade 11 (AS Level)' },
      { id: '12', name: 'Grade 12 (A Level)' }
    ]
  },

  subjects: {
    cbse: {
      '1': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'evs', name: 'Environmental Studies (EVS)' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'hindi', name: 'Hindi' }
      ],
      '2': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'evs', name: 'Environmental Studies (EVS)' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'hindi', name: 'Hindi' }
      ],
      '3': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'evs', name: 'Environmental Studies (EVS)' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'hindi', name: 'Hindi' }
      ],
      '4': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'evs', name: 'Environmental Studies (EVS)' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'hindi', name: 'Hindi' }
      ],
      '5': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'evs', name: 'Environmental Studies (EVS)' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'hindi', name: 'Hindi' }
      ],
      '6': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
        { id: 'social_science', name: 'Social Science' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'hindi', name: 'Hindi' }
      ],
      '7': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
        { id: 'social_science', name: 'Social Science' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'hindi', name: 'Hindi' }
      ],
      '8': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
        { id: 'social_science', name: 'Social Science' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'hindi', name: 'Hindi' }
      ],
      '9': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
        { id: 'social_science', name: 'Social Science' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'hindi', name: 'Hindi' }
      ],
      '10': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
        { id: 'social_science', name: 'Social Science' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'hindi', name: 'Hindi' }
      ],
      '11': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'physics', name: 'Physics' },
        { id: 'chemistry', name: 'Chemistry' },
        { id: 'biology', name: 'Biology' },
        { id: 'english', name: 'English' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'accountancy', name: 'Accountancy' },
        { id: 'economics', name: 'Economics' }
      ],
      '12': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'physics', name: 'Physics' },
        { id: 'chemistry', name: 'Chemistry' },
        { id: 'biology', name: 'Biology' },
        { id: 'english', name: 'English' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'accountancy', name: 'Accountancy' },
        { id: 'economics', name: 'Economics' }
      ]
    },
    cambridge: {
      '1': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'global_perspectives', name: 'Global Perspectives' }
      ],
      '2': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'global_perspectives', name: 'Global Perspectives' }
      ],
      '3': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'global_perspectives', name: 'Global Perspectives' }
      ],
      '4': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'global_perspectives', name: 'Global Perspectives' }
      ],
      '5': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'global_perspectives', name: 'Global Perspectives' }
      ],
      '6': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
        { id: 'global_perspectives', name: 'Global Perspectives' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'ict', name: 'ICT' }
      ],
      '7': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
        { id: 'global_perspectives', name: 'Global Perspectives' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'ict', name: 'ICT' }
      ],
      '8': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English' },
        { id: 'science', name: 'Science' },
        { id: 'global_perspectives', name: 'Global Perspectives' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'ict', name: 'ICT' }
      ],
      '9': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English Language' },
        { id: 'physics', name: 'Physics' },
        { id: 'chemistry', name: 'Chemistry' },
        { id: 'biology', name: 'Biology' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'economics', name: 'Economics' }
      ],
      '10': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'english', name: 'English Language' },
        { id: 'physics', name: 'Physics' },
        { id: 'chemistry', name: 'Chemistry' },
        { id: 'biology', name: 'Biology' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'economics', name: 'Economics' }
      ],
      '11': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'physics', name: 'Physics' },
        { id: 'chemistry', name: 'Chemistry' },
        { id: 'biology', name: 'Biology' },
        { id: 'english', name: 'English' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'economics', name: 'Economics' }
      ],
      '12': [
        { id: 'mathematics', name: 'Mathematics' },
        { id: 'physics', name: 'Physics' },
        { id: 'chemistry', name: 'Chemistry' },
        { id: 'biology', name: 'Biology' },
        { id: 'english', name: 'English' },
        { id: 'computer_science', name: 'Computer Science' },
        { id: 'economics', name: 'Economics' }
      ]
    }
  },

  publishers: {
    cbse: {
      mathematics: [
        { id: 'ncert', name: 'NCERT' },
        { id: 'rd_sharma', name: 'R.D. Sharma' },
        { id: 'rs_aggarwal', name: 'R.S. Aggarwal' },
        { id: 'sl_arora', name: 'S.L. Arora' }
      ],
      english: [
        { id: 'ncert', name: 'NCERT' },
        { id: 'oxford', name: 'Oxford University Press' },
        { id: 'macmillan', name: 'Macmillan' },
        { id: 'pearson', name: 'Pearson' }
      ],
      science: [
        { id: 'ncert', name: 'NCERT' },
        { id: 'lakhmir_singh', name: 'Lakhmir Singh & Manjit Kaur' },
        { id: 'sl_arora', name: 'S.L. Arora' },
        { id: 'pearson', name: 'Pearson' }
      ],
      evs: [
        { id: 'ncert', name: 'NCERT' },
        { id: 'oxford', name: 'Oxford University Press' },
        { id: 'macmillan', name: 'Macmillan' }
      ],
      social_science: [
        { id: 'ncert', name: 'NCERT' },
        { id: 'oxford', name: 'Oxford University Press' },
        { id: 'pearson', name: 'Pearson' }
      ],
      hindi: [
        { id: 'ncert', name: 'NCERT' },
        { id: 'madhubun', name: 'Madhubun (Vikas Publishing)' }
      ],
      physics: [
        { id: 'ncert', name: 'NCERT' },
        { id: 'sl_arora', name: 'S.L. Arora' },
        { id: 'hc_verma', name: 'H.C. Verma' },
        { id: 'pradeep', name: "Pradeep's Publications" }
      ],
      chemistry: [
        { id: 'ncert', name: 'NCERT' },
        { id: 'pradeep', name: "Pradeep's Publications" },
        { id: 'op_tandon', name: 'O.P. Tandon' },
        { id: 'modern_abc', name: 'Modern ABC' }
      ],
      biology: [
        { id: 'ncert', name: 'NCERT' },
        { id: 'pradeep', name: "Pradeep's Publications" },
        { id: 'truemans', name: "Trueman's Biology" }
      ],
      computer_science: [
        { id: 'ncert', name: 'NCERT' },
        { id: 'sumita_arora', name: 'Sumita Arora' },
        { id: 'preeti_arora', name: 'Preeti Arora' }
      ],
      accountancy: [
        { id: 'ncert', name: 'NCERT' },
        { id: 'dk_goel', name: 'D.K. Goel' },
        { id: 'ts_grewal', name: 'T.S. Grewal' }
      ],
      economics: [
        { id: 'ncert', name: 'NCERT' },
        { id: 'sandeep_garg', name: 'Sandeep Garg' },
        { id: 'tr_jain', name: 'T.R. Jain & V.K. Ohri' }
      ]
    },
    cambridge: {
      mathematics: [
        { id: 'cambridge_press', name: 'Cambridge University Press' },
        { id: 'collins', name: 'Collins' },
        { id: 'hodder', name: 'Hodder Education' },
        { id: 'oxford', name: 'Oxford University Press' },
        { id: 'pearson', name: 'Pearson' }
      ],
      english: [
        { id: 'cambridge_press', name: 'Cambridge University Press' },
        { id: 'collins', name: 'Collins' },
        { id: 'oxford', name: 'Oxford University Press' },
        { id: 'pearson', name: 'Pearson' }
      ],
      science: [
        { id: 'cambridge_press', name: 'Cambridge University Press' },
        { id: 'collins', name: 'Collins' },
        { id: 'hodder', name: 'Hodder Education' },
        { id: 'oxford', name: 'Oxford University Press' }
      ],
      global_perspectives: [
        { id: 'cambridge_press', name: 'Cambridge University Press' },
        { id: 'collins', name: 'Collins' }
      ],
      ict: [
        { id: 'cambridge_press', name: 'Cambridge University Press' },
        { id: 'hodder', name: 'Hodder Education' }
      ],
      physics: [
        { id: 'cambridge_press', name: 'Cambridge University Press' },
        { id: 'hodder', name: 'Hodder Education' },
        { id: 'oxford', name: 'Oxford University Press' }
      ],
      chemistry: [
        { id: 'cambridge_press', name: 'Cambridge University Press' },
        { id: 'hodder', name: 'Hodder Education' },
        { id: 'oxford', name: 'Oxford University Press' }
      ],
      biology: [
        { id: 'cambridge_press', name: 'Cambridge University Press' },
        { id: 'hodder', name: 'Hodder Education' },
        { id: 'oxford', name: 'Oxford University Press' }
      ],
      computer_science: [
        { id: 'cambridge_press', name: 'Cambridge University Press' },
        { id: 'hodder', name: 'Hodder Education' }
      ],
      economics: [
        { id: 'cambridge_press', name: 'Cambridge University Press' },
        { id: 'hodder', name: 'Hodder Education' },
        { id: 'oxford', name: 'Oxford University Press' }
      ]
    }
  },

  // Topics mapped by board → subject → grade → publisher
  topics: {
    cbse: {
      mathematics: {
        '1': {
          ncert: ['Shapes and Space', 'Numbers from One to Nine', 'Addition', 'Subtraction', 'Numbers from Ten to Twenty', 'Time', 'Measurement', 'Numbers up to 50', 'Data Handling', 'Patterns', 'Numbers up to 100', 'Money', 'How Many'],
          rd_sharma: ['Numbers up to 100', 'Addition and Subtraction', 'Shapes and Patterns', 'Time and Money', 'Measurement', 'Data Handling'],
          rs_aggarwal: ['Numbers up to 100', 'Addition', 'Subtraction', 'Shapes', 'Patterns', 'Time', 'Money', 'Measurement'],
          sl_arora: ['Numbers up to 100', 'Addition', 'Subtraction', 'Shapes', 'Patterns', 'Time', 'Money', 'Measurement']
        },
        '2': {
          ncert: ['What is Long, What is Round?', 'Counting in Groups', 'How Much Can You Carry?', 'Counting in Tens', 'Patterns', 'Footprints', 'Jugs and Mugs', 'Tens and Ones', 'My Funday', 'Add Our Points', 'Lines and Lines', 'Give and Take', 'The Longest Step', 'Birds Come, Birds Go', 'How Many Ponytails?'],
          rd_sharma: ['Numbers up to 200', 'Addition and Subtraction', 'Multiplication', 'Measurement', 'Time', 'Patterns', 'Data Handling'],
          rs_aggarwal: ['Numbers up to 200', 'Addition', 'Subtraction', 'Multiplication', 'Shapes', 'Time', 'Money'],
          sl_arora: ['Numbers up to 200', 'Addition', 'Subtraction', 'Multiplication', 'Shapes', 'Time', 'Money']
        },
        '3': {
          ncert: ['Where to Look From', 'Fun with Numbers', 'Give and Take', 'Long and Short', 'Shapes and Designs', 'Fun with Give and Take', 'Time Goes On', 'Who is Heavier?', 'How Many Times?', 'Play with Patterns', 'Jugs and Mugs', 'Can We Share?', 'Smart Charts', 'Rupees and Paise'],
          rd_sharma: ['Numbers up to 1000', 'Addition and Subtraction', 'Multiplication', 'Division', 'Fractions', 'Measurement', 'Time', 'Geometry', 'Patterns', 'Data Handling'],
          rs_aggarwal: ['Numbers up to 1000', 'Addition', 'Subtraction', 'Multiplication', 'Division', 'Fractions', 'Geometry', 'Patterns'],
          sl_arora: ['Numbers up to 1000', 'Addition', 'Subtraction', 'Multiplication', 'Division', 'Fractions', 'Geometry', 'Patterns']
        },
        '4': {
          ncert: ['Building with Bricks', 'Long and Short', 'A Trip to Bhopal', 'Tick Tick Tick', 'The Way The World Looks', 'The Junk Seller', 'Jugs and Mugs', 'Carts and Wheels', 'Halves and Quarters', 'Play with Patterns', 'Tables and Shares', 'How Heavy? How Light?', 'Fields and Fences', 'Smart Charts'],
          rd_sharma: ['Large Numbers', 'Addition and Subtraction', 'Multiplication', 'Division', 'Factors and Multiples', 'Fractions and Decimals', 'Geometry', 'Perimeter and Area', 'Data Handling', 'Patterns'],
          rs_aggarwal: ['Large Numbers', 'Operations on Numbers', 'Factors and Multiples', 'Fractions', 'Decimals', 'Geometry', 'Measurement'],
          sl_arora: ['Large Numbers', 'Operations on Numbers', 'Factors and Multiples', 'Fractions', 'Decimals', 'Geometry', 'Measurement']
        },
        '5': {
          ncert: ['The Fish Tale', 'Shapes and Angles', 'How Many Squares?', 'Parts and Wholes', 'Does it Look the Same?', 'Be My Multiple, I\'ll Be Your Factor', 'Can You See the Pattern?', 'Mapping Your Way', 'Boxes and Sketches', 'Tenths and Hundredths', 'Area and its Boundary', 'Smart Charts', 'Ways to Multiply and Divide', 'How Big? How Heavy?'],
          rd_sharma: ['Large Numbers', 'Roman Numerals', 'Operations', 'Factors and Multiples', 'HCF and LCM', 'Fractions', 'Decimals', 'Percentage', 'Profit and Loss', 'Geometry', 'Perimeter and Area', 'Volume', 'Data Handling'],
          rs_aggarwal: ['Numbers and Operations', 'HCF and LCM', 'Fractions', 'Decimals', 'Percentage', 'Geometry', 'Mensuration', 'Data Handling'],
          sl_arora: ['Numbers and Operations', 'HCF and LCM', 'Fractions', 'Decimals', 'Percentage', 'Geometry', 'Mensuration', 'Data Handling']
        },
        '6': {
          ncert: ['Knowing Our Numbers', 'Whole Numbers', 'Playing with Numbers', 'Basic Geometrical Ideas', 'Understanding Elementary Shapes', 'Integers', 'Fractions', 'Decimals', 'Data Handling', 'Mensuration', 'Algebra', 'Ratio and Proportion', 'Symmetry', 'Practical Geometry'],
          rd_sharma: ['Knowing Our Numbers', 'Playing with Numbers', 'Whole Numbers', 'Negative Numbers and Integers', 'Fractions', 'Decimals', 'Algebra', 'Ratio, Proportion and Unitary Method', 'Basic Geometrical Concepts', 'Angles', 'Triangles', 'Quadrilaterals', 'Circles', 'Constructions', 'Symmetry', 'Mensuration', 'Data Handling'],
          rs_aggarwal: ['Number System', 'Factors and Multiples', 'Whole Numbers', 'Integers', 'Fractions', 'Decimals', 'Algebra', 'Ratio and Proportion', 'Geometry', 'Mensuration', 'Data Handling'],
          sl_arora: ['Number System', 'Factors and Multiples', 'Whole Numbers', 'Integers', 'Fractions', 'Decimals', 'Algebra', 'Ratio and Proportion', 'Geometry', 'Mensuration', 'Data Handling']
        },
        '7': {
          ncert: ['Integers', 'Fractions and Decimals', 'Data Handling', 'Simple Equations', 'Lines and Angles', 'The Triangle and Its Properties', 'Congruence of Triangles', 'Comparing Quantities', 'Rational Numbers', 'Practical Geometry', 'Perimeter and Area', 'Algebraic Expressions', 'Exponents and Powers', 'Symmetry', 'Visualising Solid Shapes'],
          rd_sharma: ['Integers', 'Fractions', 'Decimals', 'Rational Numbers', 'Operations on Rational Numbers', 'Exponents', 'Algebraic Expressions', 'Linear Equations in One Variable', 'Ratio and Proportion', 'Percentage', 'Profit and Loss', 'Simple Interest', 'Lines and Angles', 'Properties of Triangles', 'Congruence', 'Symmetry', 'Perimeter and Area', 'Data Handling'],
          rs_aggarwal: ['Integers', 'Fractions and Decimals', 'Rational Numbers', 'Exponents', 'Algebraic Expressions', 'Linear Equations', 'Ratio and Proportion', 'Geometry', 'Mensuration', 'Data Handling'],
          sl_arora: ['Integers', 'Fractions and Decimals', 'Rational Numbers', 'Exponents', 'Algebraic Expressions', 'Linear Equations', 'Ratio and Proportion', 'Geometry', 'Mensuration', 'Data Handling']
        },
        '8': {
          ncert: ['Rational Numbers', 'Linear Equations in One Variable', 'Understanding Quadrilaterals', 'Practical Geometry', 'Data Handling', 'Squares and Square Roots', 'Cubes and Cube Roots', 'Comparing Quantities', 'Algebraic Expressions and Identities', 'Visualising Solid Shapes', 'Mensuration', 'Exponents and Powers', 'Direct and Inverse Proportions', 'Factorisation', 'Introduction to Graphs', 'Playing with Numbers'],
          rd_sharma: ['Rational Numbers', 'Powers', 'Squares and Square Roots', 'Cubes and Cube Roots', 'Algebraic Expressions', 'Factorization', 'Linear Equations', 'Quadrilaterals', 'Parallelograms', 'Data Handling', 'Percentage', 'Profit and Loss', 'Compound Interest', 'Mensuration', 'Graphs', 'Direct and Inverse Variation'],
          rs_aggarwal: ['Rational Numbers', 'Exponents', 'Squares and Roots', 'Cubes and Roots', 'Algebraic Expressions', 'Factorization', 'Linear Equations', 'Quadrilaterals', 'Data Handling', 'Mensuration', 'Graphs'],
          sl_arora: ['Rational Numbers', 'Exponents', 'Squares and Roots', 'Cubes and Roots', 'Algebraic Expressions', 'Factorization', 'Linear Equations', 'Quadrilaterals', 'Data Handling', 'Mensuration', 'Graphs']
        },
        '9': {
          ncert: ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations in Two Variables', 'Introduction to Euclid\'s Geometry', 'Lines and Angles', 'Triangles', 'Quadrilaterals', 'Areas of Parallelograms and Triangles', 'Circles', 'Constructions', 'Heron\'s Formula', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
          rd_sharma: ['Number Systems', 'Exponents of Real Numbers', 'Rationalisation', 'Algebraic Identities', 'Factorisation of Algebraic Expressions', 'Factorisation of Polynomials', 'Linear Equations in Two Variables', 'Coordinate Geometry', 'Lines and Angles', 'Triangle and its Angles', 'Congruent Triangles', 'Quadrilaterals', 'Areas of Parallelograms and Triangles', 'Circles', 'Constructions', 'Heron\'s Formula', 'Surface Areas and Volumes', 'Tabular Representation', 'Graphical Representation', 'Mean, Median and Mode', 'Probability'],
          rs_aggarwal: ['Number Systems', 'Polynomials', 'Factorization', 'Linear Equations', 'Coordinate Geometry', 'Geometry', 'Mensuration', 'Statistics', 'Probability'],
          sl_arora: ['Number Systems', 'Polynomials', 'Factorization', 'Linear Equations', 'Coordinate Geometry', 'Geometry', 'Mensuration', 'Statistics', 'Probability']
        },
        '10': {
          ncert: ['Real Numbers', 'Polynomials', 'Pair of Linear Equations in Two Variables', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Introduction to Trigonometry', 'Some Applications of Trigonometry', 'Circles', 'Constructions', 'Areas Related to Circles', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
          rd_sharma: ['Real Numbers', 'Polynomials', 'Linear Equations in Two Variables', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Trigonometric Ratios', 'Trigonometric Identities', 'Heights and Distances', 'Circles', 'Constructions', 'Areas Related to Circles', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
          rs_aggarwal: ['Real Numbers', 'Polynomials', 'Linear Equations', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Trigonometry', 'Circles', 'Mensuration', 'Statistics', 'Probability'],
          sl_arora: ['Real Numbers', 'Polynomials', 'Linear Equations', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Trigonometry', 'Circles', 'Mensuration', 'Statistics', 'Probability']
        },
        '11': {
          ncert: ['Sets', 'Relations and Functions', 'Trigonometric Functions', 'Principle of Mathematical Induction', 'Complex Numbers and Quadratic Equations', 'Linear Inequalities', 'Permutations and Combinations', 'Binomial Theorem', 'Sequences and Series', 'Straight Lines', 'Conic Sections', 'Introduction to Three Dimensional Geometry', 'Limits and Derivatives', 'Mathematical Reasoning', 'Statistics', 'Probability'],
          rd_sharma: ['Sets', 'Relations', 'Functions', 'Measurement of Angles', 'Trigonometric Functions', 'Graphs of Trigonometric Functions', 'Values of Trigonometric Functions', 'Trigonometric Equations', 'Complex Numbers', 'Quadratic Equations', 'Linear Inequalities', 'Permutations', 'Combinations', 'Binomial Theorem', 'Arithmetic Progressions', 'Geometric Progressions', 'Straight Lines', 'Conic Sections', 'Three Dimensional Geometry', 'Limits', 'Derivatives', 'Statistics', 'Probability'],
          rs_aggarwal: ['Sets', 'Relations and Functions', 'Trigonometry', 'Complex Numbers', 'Linear Inequalities', 'Permutations and Combinations', 'Binomial Theorem', 'Sequences and Series', 'Coordinate Geometry', 'Calculus', 'Statistics and Probability'],
          sl_arora: ['Sets', 'Relations and Functions', 'Trigonometry', 'Complex Numbers', 'Linear Inequalities', 'Permutations and Combinations', 'Binomial Theorem', 'Sequences and Series', 'Coordinate Geometry', 'Calculus', 'Statistics and Probability']
        },
        '12': {
          ncert: ['Relations and Functions', 'Inverse Trigonometric Functions', 'Matrices', 'Determinants', 'Continuity and Differentiability', 'Application of Derivatives', 'Integrals', 'Application of Integrals', 'Differential Equations', 'Vector Algebra', 'Three Dimensional Geometry', 'Linear Programming', 'Probability'],
          rd_sharma: ['Relations and Functions', 'Inverse Trigonometric Functions', 'Matrices', 'Determinants', 'Adjoint and Inverse of a Matrix', 'Continuity', 'Differentiability', 'Differentiation', 'Applications of Derivatives', 'Indefinite Integrals', 'Definite Integrals', 'Areas of Bounded Regions', 'Differential Equations', 'Algebra of Vectors', 'Scalar Product', 'Vector Product', 'Three Dimensional Geometry', 'Linear Programming', 'Probability', 'Mean and Variance'],
          rs_aggarwal: ['Relations and Functions', 'Inverse Trigonometry', 'Matrices and Determinants', 'Continuity and Differentiability', 'Derivatives', 'Integrals', 'Differential Equations', 'Vectors', '3D Geometry', 'Linear Programming', 'Probability'],
          sl_arora: ['Relations and Functions', 'Inverse Trigonometry', 'Matrices and Determinants', 'Continuity and Differentiability', 'Derivatives', 'Integrals', 'Differential Equations', 'Vectors', '3D Geometry', 'Linear Programming', 'Probability']
        }
      },
      english: {
        '1': { ncert: ['Greetings and Introductions', 'Alphabet and Phonics', 'Simple Words', 'Short Sentences', 'Stories and Rhymes', 'Picture Reading', 'Action Words'], oxford: ['Greetings', 'Alphabet', 'Basic Vocabulary', 'Rhymes', 'Stories'], macmillan: ['Alphabet', 'Phonics', 'Simple Sentences', 'Rhymes'], pearson: ['Alphabet', 'Simple Words', 'Rhymes', 'Stories'] },
        '2': { ncert: ['Reading Comprehension', 'Grammar Basics', 'Nouns', 'Pronouns', 'Verbs', 'Simple Sentences', 'Stories', 'Poem Appreciation'], oxford: ['Nouns', 'Pronouns', 'Verbs', 'Sentences', 'Comprehension', 'Creative Writing'], macmillan: ['Nouns', 'Verbs', 'Sentences', 'Comprehension', 'Rhymes'], pearson: ['Nouns', 'Verbs', 'Sentences', 'Comprehension', 'Stories'] },
        '3': { ncert: ['Reading Comprehension', 'Nouns', 'Pronouns', 'Verbs', 'Adjectives', 'Articles', 'Sentence Formation', 'Story Writing', 'Poem Appreciation'], oxford: ['Parts of Speech', 'Sentence Types', 'Comprehension', 'Creative Writing', 'Grammar'], macmillan: ['Parts of Speech', 'Sentences', 'Comprehension', 'Writing Skills'], pearson: ['Parts of Speech', 'Sentences', 'Comprehension', 'Creative Writing'] },
        '4': { ncert: ['Reading Comprehension', 'Parts of Speech', 'Tenses', 'Prepositions', 'Conjunctions', 'Paragraph Writing', 'Letter Writing', 'Story Writing'], oxford: ['Tenses', 'Parts of Speech', 'Comprehension', 'Writing Skills', 'Grammar'], macmillan: ['Tenses', 'Parts of Speech', 'Comprehension', 'Letter Writing'], pearson: ['Tenses', 'Parts of Speech', 'Comprehension', 'Paragraph Writing'] },
        '5': { ncert: ['Reading Comprehension', 'Advanced Grammar', 'Tenses', 'Active and Passive Voice', 'Direct and Indirect Speech', 'Essay Writing', 'Letter Writing', 'Story Completion'], oxford: ['Grammar', 'Tenses', 'Voice', 'Speech', 'Writing', 'Comprehension'], macmillan: ['Grammar', 'Tenses', 'Writing Skills', 'Comprehension'], pearson: ['Grammar', 'Tenses', 'Voice', 'Writing'] },
        '6': { ncert: ['Who Did Patrick\'s Homework?', 'How the Dog Found Himself a New Master!', 'Taro\'s Reward', 'An Indian – American Woman in Space', 'A Different Kind of School', 'Who I Am', 'Fair Play', 'The Banyan Tree', 'Grammar - Tenses', 'Grammar - Voices', 'Writing Skills'], oxford: ['Comprehension', 'Grammar', 'Tenses', 'Voice', 'Writing', 'Poetry'], macmillan: ['Comprehension', 'Grammar', 'Writing', 'Poetry'], pearson: ['Comprehension', 'Grammar', 'Creative Writing', 'Poetry'] },
        '7': { ncert: ['Three Questions', 'A Gift of Chappals', 'Gopal and the Hilsa Fish', 'The Ashes That Made Trees Bloom', 'Quality', 'Expert Detectives', 'The Invention of Vita-Wonk', 'Grammar - Tenses', 'Grammar - Modals', 'Writing - Essay', 'Writing - Letter'], oxford: ['Comprehension', 'Grammar', 'Writing Skills', 'Poetry', 'Literature'], macmillan: ['Comprehension', 'Grammar', 'Essay Writing', 'Letter Writing'], pearson: ['Comprehension', 'Grammar', 'Writing', 'Literature'] },
        '8': { ncert: ['The Best Christmas Present in the World', 'The Tsunami', 'Glimpses of the Past', 'Bepin Choudhury\'s Lapse of Memory', 'The Summit Within', 'This is Jody\'s Fawn', 'Grammar - Tenses', 'Grammar - Passive Voice', 'Writing - Diary Entry', 'Writing - Report'], oxford: ['Comprehension', 'Grammar', 'Writing', 'Literature'], macmillan: ['Comprehension', 'Grammar', 'Creative Writing'], pearson: ['Comprehension', 'Grammar', 'Writing Skills'] },
        '9': { ncert: ['The Fun They Had', 'The Sound of Music', 'The Little Girl', 'A Truly Beautiful Mind', 'The Snake and the Mirror', 'My Childhood', 'Reach for the Top', 'Grammar - Tenses', 'Grammar - Reported Speech', 'Grammar - Conditionals', 'Writing - Article', 'Writing - Story'], oxford: ['Comprehension', 'Literature', 'Grammar', 'Writing Skills'], macmillan: ['Comprehension', 'Grammar', 'Literature', 'Writing'], pearson: ['Comprehension', 'Grammar', 'Literature', 'Creative Writing'] },
        '10': { ncert: ['A Letter to God', 'Nelson Mandela', 'Two Stories about Flying', 'From the Diary of Anne Frank', 'Glimpses of India', 'Mijbil the Otter', 'Grammar - Tenses', 'Grammar - Modals', 'Grammar - Subject-Verb Agreement', 'Writing - Formal Letters', 'Writing - Analytical Paragraphs'], oxford: ['Comprehension', 'Literature', 'Grammar', 'Writing'], macmillan: ['Comprehension', 'Grammar', 'Literature', 'Writing'], pearson: ['Comprehension', 'Grammar', 'Literature', 'Writing'] },
        '11': { ncert: ['The Portrait of a Lady', 'We\'re Not Afraid to Die', 'Discovering Tut', 'Landscape of the Soul', 'The Ailing Planet', 'The Browning Version', 'The Adventure', 'Silk Road', 'Grammar and Writing Skills', 'Note-making and Summarizing'], oxford: ['Literature', 'Comprehension', 'Grammar', 'Writing'], macmillan: ['Literature', 'Grammar', 'Writing Skills'], pearson: ['Literature', 'Grammar', 'Writing'] },
        '12': { ncert: ['The Last Lesson', 'Lost Spring', 'Deep Water', 'The Rattrap', 'Indigo', 'Poets and Pancakes', 'The Interview', 'Going Places', 'Advanced Grammar', 'Writing - Reports and Articles', 'Writing - Letters and Applications'], oxford: ['Literature', 'Comprehension', 'Advanced Grammar', 'Writing'], macmillan: ['Literature', 'Grammar', 'Advanced Writing'], pearson: ['Literature', 'Advanced Grammar', 'Writing Skills'] }
      },
      science: {
        '6': { ncert: ['Food: Where Does it Come From?', 'Components of Food', 'Fibre to Fabric', 'Sorting Materials into Groups', 'Separation of Substances', 'Changes Around Us', 'Getting to Know Plants', 'Body Movements', 'The Living Organisms and Their Surroundings', 'Motion and Measurement of Distances', 'Light, Shadows and Reflections', 'Electricity and Circuits', 'Fun with Magnets', 'Water', 'Air Around Us', 'Garbage In, Garbage Out'], lakhmir_singh: ['Food and its Components', 'Fibre to Fabric', 'Sorting and Separation', 'Changes Around Us', 'Plants', 'Body Movements', 'Living Organisms', 'Motion and Measurement', 'Light', 'Electricity', 'Magnets', 'Water', 'Air', 'Waste Management'], sl_arora: ['Food', 'Materials', 'Plants', 'Living World', 'Motion', 'Energy', 'Environment'], pearson: ['Food', 'Materials', 'Living World', 'Motion', 'Energy', 'Environment'] },
        '7': { ncert: ['Nutrition in Plants', 'Nutrition in Animals', 'Fibre to Fabric', 'Heat', 'Acids, Bases and Salts', 'Physical and Chemical Changes', 'Weather, Climate and Adaptations of Animals to Climate', 'Winds, Storms and Cyclones', 'Soil', 'Respiration in Organisms', 'Transportation in Animals and Plants', 'Reproduction in Plants', 'Motion and Time', 'Electric Current and its Effects', 'Light', 'Water: A Precious Resource', 'Forests: Our Lifeline', 'Wastewater Story'], lakhmir_singh: ['Nutrition', 'Fibre', 'Heat', 'Acids and Bases', 'Physical and Chemical Changes', 'Climate', 'Soil', 'Respiration', 'Transportation', 'Reproduction', 'Motion and Time', 'Electricity', 'Light', 'Water', 'Forests'], sl_arora: ['Nutrition', 'Materials', 'Heat', 'Motion', 'Life Processes', 'Environment'], pearson: ['Nutrition', 'Materials', 'Heat', 'Motion', 'Life Processes', 'Environment'] },
        '8': { ncert: ['Crop Production and Management', 'Microorganisms', 'Synthetic Fibres and Plastics', 'Materials: Metals and Non-Metals', 'Coal and Petroleum', 'Combustion and Flame', 'Conservation of Plants and Animals', 'Cell - Structure and Functions', 'Reproduction in Animals', 'Reaching the Age of Adolescence', 'Force and Pressure', 'Friction', 'Sound', 'Chemical Effects of Electric Current', 'Some Natural Phenomena', 'Light', 'Stars and the Solar System', 'Pollution of Air and Water'], lakhmir_singh: ['Crop Production', 'Microorganisms', 'Materials', 'Coal and Petroleum', 'Combustion', 'Conservation', 'Cell', 'Reproduction', 'Adolescence', 'Force', 'Friction', 'Sound', 'Electricity', 'Light', 'Solar System', 'Pollution'], sl_arora: ['Agriculture', 'Materials', 'Life Processes', 'Force and Energy', 'Environment'], pearson: ['Agriculture', 'Materials', 'Life Processes', 'Force and Energy', 'Environment'] },
        '9': { ncert: ['Matter in Our Surroundings', 'Is Matter Around Us Pure?', 'Atoms and Molecules', 'Structure of the Atom', 'The Fundamental Unit of Life', 'Tissues', 'Diversity in Living Organisms', 'Motion', 'Force and Laws of Motion', 'Gravitation', 'Work and Energy', 'Sound', 'Why Do We Fall Ill?', 'Natural Resources', 'Improvement in Food Resources'], lakhmir_singh: ['Matter', 'Atoms and Molecules', 'Atomic Structure', 'Cell Biology', 'Tissues', 'Diversity', 'Motion', 'Force', 'Gravitation', 'Work and Energy', 'Sound', 'Health', 'Natural Resources', 'Food Resources'], sl_arora: ['Matter', 'Chemistry', 'Biology', 'Physics', 'Environment'], pearson: ['Matter', 'Chemistry', 'Biology', 'Physics', 'Environment'] },
        '10': { ncert: ['Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals', 'Carbon and its Compounds', 'Periodic Classification of Elements', 'Life Processes', 'Control and Coordination', 'How do Organisms Reproduce?', 'Heredity and Evolution', 'Light - Reflection and Refraction', 'Human Eye and Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Sources of Energy', 'Our Environment', 'Management of Natural Resources'], lakhmir_singh: ['Chemical Reactions', 'Acids and Bases', 'Metals', 'Carbon Compounds', 'Periodic Table', 'Life Processes', 'Control and Coordination', 'Reproduction', 'Heredity', 'Light', 'Human Eye', 'Electricity', 'Magnetism', 'Energy', 'Environment', 'Natural Resources'], sl_arora: ['Chemistry', 'Biology', 'Physics', 'Environment'], pearson: ['Chemistry', 'Biology', 'Physics', 'Environment'] }
      },
      evs: {
        '1': { ncert: ['My Family', 'My Body', 'Food We Eat', 'Clothes We Wear', 'Animals Around Us', 'Plants Around Us', 'Water', 'Weather', 'Festivals', 'My School'], oxford: ['Family', 'Body', 'Food', 'Animals', 'Plants', 'Water', 'Weather'], macmillan: ['Family', 'Body', 'Food', 'Animals', 'Plants', 'School'] },
        '2': { ncert: ['My Family and Friends', 'Plants and Animals', 'Food', 'Water', 'Shelter', 'Keeping Clean', 'Safety and First Aid', 'Weather and Seasons'], oxford: ['Family', 'Living Things', 'Food', 'Water', 'Shelter', 'Health', 'Weather'], macmillan: ['Family', 'Plants', 'Animals', 'Food', 'Water', 'Seasons'] },
        '3': { ncert: ['Poonam\'s Day Out', 'The Plant Fairy', 'Water O\' Water!', 'Our First School', 'Chhotu\'s House', 'Foods We Eat', 'Saying Without Speaking', 'Flying High', 'It\'s Raining', 'What is Cooking?', 'From Here to There', 'Work We Do'], oxford: ['Plants', 'Animals', 'Water', 'Food', 'Shelter', 'Transport', 'Weather'], macmillan: ['Plants', 'Animals', 'Water', 'Food', 'Transport', 'Environment'] },
        '4': { ncert: ['Going to School', 'Ear to Ear', 'A Day with Nandu', 'The Story of Amrita', 'Anita and the Honeybees', 'Omana\'s Journey', 'From the Window', 'Reaching Grandmother\'s House', 'Changing Families', 'Hu Tu Tu, Hu Tu Tu', 'The Valley of Flowers', 'Changing Times'], oxford: ['Plants', 'Animals', 'Environment', 'Food', 'Travel', 'Community'], macmillan: ['Living Things', 'Environment', 'Food', 'Community', 'Travel'] },
        '5': { ncert: ['Super Senses', 'A Snake Charmer\'s Story', 'From Tasting to Digesting', 'Mangoes Round the Year', 'Seeds and Seeds', 'Every Drop Counts', 'Experiments with Water', 'A Treat for Mosquitoes', 'Up You Go!', 'Walls Tell Stories', 'Sunita in Space', 'What if it Finishes?', 'A Shelter So High!', 'When the Earth Shook!', 'Blow Hot, Blow Cold'], oxford: ['Senses', 'Food', 'Water', 'Plants', 'Health', 'Environment', 'Space'], macmillan: ['Senses', 'Food', 'Water', 'Plants', 'Health', 'Environment'] }
      },
      social_science: {
        '6': { ncert: ['What, Where, How and When?', 'From Hunting-Gathering to Growing Food', 'In the Earliest Cities', 'What Books and Burials Tell Us', 'Kingdoms, Kings and an Early Republic', 'New Questions and Ideas', 'The Earth in the Solar System', 'Globe: Latitudes and Longitudes', 'Motions of the Earth', 'Maps', 'Understanding Diversity', 'Diversity and Discrimination', 'What is Government?', 'Key Elements of a Democratic Government'], oxford: ['History', 'Geography', 'Civics'], pearson: ['Ancient History', 'Physical Geography', 'Civics'] },
        '7': { ncert: ['Tracing Changes through a Thousand Years', 'New Kings and Kingdoms', 'The Delhi Sultans', 'The Mughal Empire', 'Environment', 'Inside Our Earth', 'Our Changing Earth', 'Air', 'Water', 'Equality in Indian Democracy', 'Role of the Government in Health', 'How the State Government Works', 'Markets Around Us'], oxford: ['Medieval History', 'Geography', 'Civics'], pearson: ['Medieval History', 'Geography', 'Political Life'] },
        '8': { ncert: ['How, When and Where', 'From Trade to Territory', 'Ruling the Countryside', 'Tribals, Dikus and the Vision of a Golden Age', 'When People Rebel', 'Resources', 'Land, Soil, Water, Natural Vegetation and Wildlife Resources', 'Agriculture', 'Industries', 'The Indian Constitution', 'Understanding Secularism', 'Parliament and the Making of Laws', 'Understanding Marginalisation'], oxford: ['Modern History', 'Geography', 'Civics'], pearson: ['Modern Indian History', 'Resources', 'Governance'] },
        '9': { ncert: ['The French Revolution', 'Socialism in Europe and the Russian Revolution', 'Nazism and the Rise of Hitler', 'Forest Society and Colonialism', 'India – Size and Location', 'Physical Features of India', 'Drainage', 'Climate', 'Natural Vegetation and Wild Life', 'Population', 'Democracy in the Contemporary World', 'Constitutional Design', 'Electoral Politics', 'Working of Institutions', 'The Story of Village Palampur', 'People as Resource', 'Poverty as a Challenge', 'Food Security in India'], oxford: ['World History', 'Indian Geography', 'Civics', 'Economics'], pearson: ['History', 'Geography', 'Political Science', 'Economics'] },
        '10': { ncert: ['The Rise of Nationalism in Europe', 'Nationalism in India', 'The Making of a Global World', 'The Age of Industrialisation', 'Print Culture and the Modern World', 'Resources and Development', 'Forest and Wildlife Resources', 'Water Resources', 'Agriculture', 'Minerals and Energy Resources', 'Manufacturing Industries', 'Power Sharing', 'Federalism', 'Democracy and Diversity', 'Gender, Religion and Caste', 'Political Parties', 'Outcomes of Democracy', 'Development', 'Sectors of the Indian Economy', 'Money and Credit', 'Globalisation and the Indian Economy'], oxford: ['History', 'Geography', 'Political Science', 'Economics'], pearson: ['History', 'Geography', 'Political Science', 'Economics'] }
      },
      hindi: {
        '1': { ncert: ['झूला', 'आम की कहानी', 'आम की टोकरी', 'पत्ते ही पत्ते', 'पकौड़ी', 'छुक-छुक गाड़ी', 'रसोईघर', 'चूहो! म्याऊँ सो रही है', 'बंदर और गिलहरी', 'पगड़ी', 'पतंग', 'गेंद-बल्ला'], madhubun: ['वर्णमाला', 'मात्राएँ', 'शब्द ज्ञान', 'वाक्य', 'कहानियाँ'] },
        '6': { ncert: ['वह चिड़िया जो', 'बचपन', 'नादान दोस्त', 'चाँद से थोड़ी-सी गप्पें', 'अक्षरों का महत्व', 'पार नज़र के', 'साथी हाथ बढ़ाना', 'ऐसे-ऐसे', 'टिकट-अलबम', 'झाँसी की रानी', 'जो देखकर भी नहीं देखते', 'संसार पुस्तक है', 'व्याकरण - संज्ञा, सर्वनाम, क्रिया, विशेषण'], madhubun: ['गद्य', 'पद्य', 'व्याकरण', 'लेखन'] },
        '10': { ncert: ['सूरदास के पद', 'राम-लक्ष्मण-परशुराम संवाद', 'आत्मकथ्य', 'उत्साह', 'अट नहीं रही', 'यह दंतुरहित मुस्कान', 'फसल', 'छाया मत छूना', 'कन्यादान', 'संगतकार', 'नेताजी का चश्मा', 'बालगोबिन भगत', 'लखनवी अंदाज़', 'मानवीय करुणा की दिव्य चमक', 'व्याकरण और लेखन'], madhubun: ['काव्य खंड', 'गद्य खंड', 'व्याकरण', 'लेखन कौशल'] }
      },
      physics: {
        '11': { ncert: ['Physical World', 'Units and Measurements', 'Motion in a Straight Line', 'Motion in a Plane', 'Laws of Motion', 'Work, Energy and Power', 'System of Particles and Rotational Motion', 'Gravitation', 'Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Thermal Properties of Matter', 'Thermodynamics', 'Kinetic Theory', 'Oscillations', 'Waves'], sl_arora: ['Physical World', 'Units and Measurements', 'Kinematics', 'Laws of Motion', 'Work and Energy', 'Rotational Motion', 'Gravitation', 'Elasticity', 'Fluid Mechanics', 'Heat and Thermodynamics', 'Kinetic Theory of Gases', 'Oscillations and Waves'], hc_verma: ['Introduction to Physics', 'Kinematics', 'Newton\'s Laws', 'Work and Energy', 'Circular Motion', 'Rotational Mechanics', 'Gravitation', 'Fluid Mechanics', 'Waves', 'Thermodynamics'], pradeep: ['Physical World', 'Measurement', 'Kinematics', 'Dynamics', 'Work and Energy', 'Gravitation', 'Properties of Matter', 'Thermodynamics', 'Oscillations', 'Waves'] },
        '12': { ncert: ['Electric Charges and Fields', 'Electrostatic Potential and Capacitance', 'Current Electricity', 'Moving Charges and Magnetism', 'Magnetism and Matter', 'Electromagnetic Induction', 'Alternating Current', 'Electromagnetic Waves', 'Ray Optics and Optical Instruments', 'Wave Optics', 'Dual Nature of Radiation and Matter', 'Atoms', 'Nuclei', 'Semiconductor Electronics', 'Communication Systems'], sl_arora: ['Electrostatics', 'Current Electricity', 'Magnetic Effects of Current', 'EMI and AC', 'Electromagnetic Waves', 'Optics', 'Modern Physics', 'Electronics', 'Communication'], hc_verma: ['Coulomb\'s Law', 'Electric Field', 'Capacitors', 'Current Electricity', 'Magnetic Field', 'EMI', 'AC Circuits', 'Optics', 'Modern Physics'], pradeep: ['Electrostatics', 'Current Electricity', 'Magnetism', 'EMI', 'Optics', 'Modern Physics', 'Electronics'] }
      },
      chemistry: {
        '11': { ncert: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements and Periodicity in Properties', 'Chemical Bonding and Molecular Structure', 'States of Matter', 'Thermodynamics', 'Equilibrium', 'Redox Reactions', 'Hydrogen', 'The s-Block Elements', 'The p-Block Elements', 'Organic Chemistry: Some Basic Principles and Techniques', 'Hydrocarbons', 'Environmental Chemistry'], pradeep: ['Basic Concepts', 'Atomic Structure', 'Periodic Table', 'Chemical Bonding', 'States of Matter', 'Thermodynamics', 'Equilibrium', 'Redox Reactions', 'Hydrogen', 's-Block Elements', 'p-Block Elements', 'Organic Chemistry', 'Hydrocarbons', 'Environmental Chemistry'], op_tandon: ['Basic Concepts', 'Atomic Structure', 'Periodic Table', 'Bonding', 'States of Matter', 'Thermochemistry', 'Chemical Equilibrium', 'Ionic Equilibrium', 'Redox', 'Chemistry of Non-metals', 'Organic Chemistry'], modern_abc: ['Basic Concepts', 'Atomic Structure', 'Periodicity', 'Bonding', 'States of Matter', 'Thermodynamics', 'Equilibrium', 'Organic Chemistry'] },
        '12': { ncert: ['The Solid State', 'Solutions', 'Electrochemistry', 'Chemical Kinetics', 'Surface Chemistry', 'General Principles and Processes of Isolation of Elements', 'The p-Block Elements', 'The d- and f-Block Elements', 'Coordination Compounds', 'Haloalkanes and Haloarenes', 'Alcohols, Phenols and Ethers', 'Aldehydes, Ketones and Carboxylic Acids', 'Amines', 'Biomolecules', 'Polymers', 'Chemistry in Everyday Life'], pradeep: ['Solid State', 'Solutions', 'Electrochemistry', 'Kinetics', 'Surface Chemistry', 'Metallurgy', 'p-Block', 'd and f Block', 'Coordination Compounds', 'Organic Chemistry', 'Biomolecules', 'Polymers', 'Chemistry in Everyday Life'], op_tandon: ['Solid State', 'Solutions', 'Electrochemistry', 'Kinetics', 'Surface Chemistry', 'Metallurgy', 'Inorganic Chemistry', 'Organic Chemistry'], modern_abc: ['Solid State', 'Solutions', 'Electrochemistry', 'Kinetics', 'Surface Chemistry', 'Inorganic Chemistry', 'Organic Chemistry', 'Practical Chemistry'] }
      },
      biology: {
        '11': { ncert: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Structural Organisation in Animals', 'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle and Cell Division', 'Transport in Plants', 'Mineral Nutrition', 'Photosynthesis in Higher Plants', 'Respiration in Plants', 'Plant Growth and Development', 'Digestion and Absorption', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products and their Elimination', 'Locomotion and Movement', 'Neural Control and Coordination', 'Chemical Coordination and Integration'], pradeep: ['Living World', 'Classification', 'Plant Kingdom', 'Animal Kingdom', 'Morphology', 'Anatomy', 'Cell Biology', 'Biomolecules', 'Plant Physiology', 'Human Physiology'], truemans: ['Diversity', 'Structural Organisation', 'Cell Biology', 'Plant Physiology', 'Human Physiology'] },
        '12': { ncert: ['Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Evolution', 'Human Health and Disease', 'Strategies for Enhancement in Food Production', 'Microbes in Human Welfare', 'Biotechnology: Principles and Processes', 'Biotechnology and its Applications', 'Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation', 'Environmental Issues'], pradeep: ['Reproduction', 'Genetics', 'Evolution', 'Human Health', 'Biotechnology', 'Ecology'], truemans: ['Reproduction', 'Genetics and Evolution', 'Biology in Human Welfare', 'Biotechnology', 'Ecology'] }
      },
      computer_science: {
        '1': { ncert: ['Computer Around Us', 'Parts of a Computer', 'Using a Keyboard and Mouse', 'Starting and Shutting Down a Computer', 'Draw and Paint Tools', 'Learning with Computers'] },
        '2': { ncert: ['Computer Lab Rules', 'Input and Output Devices', 'Using a Mouse', 'Typing Basics', 'Fun with Paint', 'Uses of Computers'] },
        '3': { ncert: ['Hardware and Software', 'Storage Devices', 'Word Processing Basics', 'Introduction to Scratch', 'Patterns and Sequencing', 'Safe Computer Use'] },
        '4': { ncert: ['Types of Computers', 'Files and Folders', 'Text Formatting', 'Scratch Projects', 'Internet Basics', 'Digital Citizenship'] },
        '5': { ncert: ['Computer Memory and Storage', 'Presentations', 'Tables and Charts', 'Algorithms and Flowcharts', 'Introduction to Coding', 'Cyber Safety'] },
        '6': { ncert: ['Computer Fundamentals', 'Parts of a Computer', 'Input and Output Devices', 'Operating a Computer', 'Introduction to Algorithms', 'Scratch Programming Basics', 'Digital Safety'] },
        '7': { ncert: ['Number System Basics', 'Computer Hardware and Software', 'File Management', 'Internet and Email', 'Flowcharts', 'Programming Basics', 'Cyber Safety'] },
        '8': { ncert: ['Computer Networks', 'Operating Systems', 'Spreadsheets', 'Presentations', 'Introduction to HTML', 'Programming Concepts', 'Data Security'] },
        '9': { ncert: ['Computer Systems', 'Number Systems', 'Introduction to Python', 'Data Types', 'Operators and Expressions', 'Conditional Statements', 'Internet Safety'] },
        '10': { ncert: ['Python Programming', 'Functions', 'Lists and Strings', 'File Handling', 'Introduction to SQL', 'Cyber Security', 'Computer Networks'] },
        '11': { ncert: ['Computer System', 'Number System', 'Emerging Trends', 'Introduction to Problem Solving', 'Getting Started with Python', 'Flow of Control', 'Functions', 'Strings', 'Lists', 'Tuples and Dictionaries', 'Societal Impacts'], sumita_arora: ['Computer Fundamentals', 'Number Systems', 'Python Fundamentals', 'Data Types', 'Flow of Control', 'Functions', 'Strings', 'Lists', 'Tuples', 'Dictionaries', 'Sorting'], preeti_arora: ['Computer Overview', 'Python Basics', 'Data Types', 'Control Flow', 'Functions', 'Data Structures'] },
        '12': { ncert: ['Exception Handling', 'File Handling', 'Stack', 'Queue', 'Searching', 'Sorting', 'Database Concepts', 'SQL', 'Computer Networks', 'Cyber Security'], sumita_arora: ['Exception Handling', 'File Handling', 'Data Structures', 'SQL', 'Database Concepts', 'Networking', 'Cyber Security', 'Python Libraries'], preeti_arora: ['File Handling', 'Data Structures', 'Databases', 'SQL', 'Networking', 'Security'] }
      },
      accountancy: {
        '11': { ncert: ['Introduction to Accounting', 'Theory Base of Accounting', 'Recording of Transactions – I', 'Recording of Transactions – II', 'Bank Reconciliation Statement', 'Trial Balance and Rectification of Errors', 'Depreciation, Provisions and Reserves', 'Bill of Exchange', 'Financial Statements – I', 'Financial Statements – II', 'Accounts from Incomplete Records', 'Applications of Computers in Accounting'], dk_goel: ['Introduction', 'Accounting Theory', 'Journal', 'Ledger', 'Trial Balance', 'BRS', 'Depreciation', 'Bills of Exchange', 'Financial Statements', 'Computerized Accounting'], ts_grewal: ['Accounting Basics', 'Theory Base', 'Recording Transactions', 'Ledger', 'Cash Book', 'Trial Balance', 'Depreciation', 'Financial Statements'] },
        '12': { ncert: ['Accounting for Not-for-Profit Organisation', 'Accounting for Partnership: Basic Concepts', 'Reconstitution of a Partnership Firm – Admission of a Partner', 'Reconstitution of a Partnership Firm – Retirement/Death of a Partner', 'Dissolution of Partnership Firm', 'Accounting for Share Capital', 'Issue and Redemption of Debentures', 'Financial Statements of a Company', 'Analysis of Financial Statements', 'Accounting Ratios', 'Cash Flow Statement'], dk_goel: ['Not-for-Profit', 'Partnership Basics', 'Admission', 'Retirement/Death', 'Dissolution', 'Share Capital', 'Debentures', 'Company Accounts', 'Financial Analysis', 'Ratios', 'Cash Flow'], ts_grewal: ['Not-for-Profit', 'Partnership', 'Changes in Partnership', 'Company Accounts', 'Analysis of Statements', 'Cash Flow'] }
      },
      economics: {
        '11': { ncert: ['Indian Economy on the Eve of Independence', 'Indian Economy 1950-1990', 'Liberalisation, Privatisation and Globalisation', 'Poverty', 'Human Capital Formation in India', 'Rural Development', 'Employment', 'Infrastructure', 'Environment and Sustainable Development', 'Statistics for Economics', 'Collection of Data', 'Organisation of Data', 'Presentation of Data', 'Measures of Central Tendency', 'Measures of Dispersion', 'Correlation', 'Index Numbers'], sandeep_garg: ['Indian Economy', 'Statistics', 'Development Experience', 'National Income', 'Money and Banking'], tr_jain: ['Statistics', 'Collection of Data', 'Measures of Central Tendency', 'Indian Economic Development', 'Liberalisation'] },
        '12': { ncert: ['Introduction to Macroeconomics', 'National Income Accounting', 'Money and Banking', 'Determination of Income and Employment', 'Government Budget and the Economy', 'Open Economy Macroeconomics', 'Introduction to Microeconomics', 'Theory of Consumer Behaviour', 'Production and Costs', 'Theory of the Firm under Perfect Competition', 'Market Equilibrium', 'Non-competitive Markets'], sandeep_garg: ['Macroeconomics', 'National Income', 'Money and Banking', 'Income Determination', 'Budget', 'Microeconomics', 'Consumer Theory', 'Production', 'Market'], tr_jain: ['National Income', 'Money and Banking', 'Income Determination', 'Consumer Behaviour', 'Production', 'Market Equilibrium'] }
      }
    },
    cambridge: {
      mathematics: {
        '1': { cambridge_press: ['Numbers to 20', 'Addition and Subtraction within 20', 'Shapes and Patterns', 'Measurement: Length and Height', 'Time', 'Sorting and Classifying'], collins: ['Counting and Numbers', 'Addition', 'Subtraction', 'Shapes', 'Measurement', 'Patterns'], hodder: ['Numbers', 'Counting', 'Addition', 'Subtraction', 'Shapes', 'Patterns'], oxford: ['Numbers to 20', 'Operations', 'Shapes', 'Measurement'], pearson: ['Numbers', 'Addition', 'Subtraction', 'Shapes', 'Patterns'] },
        '2': { cambridge_press: ['Numbers to 100', 'Addition and Subtraction', 'Multiplication and Division', '2D and 3D Shapes', 'Measurement: Length, Mass, Capacity', 'Time', 'Fractions', 'Position and Movement'], collins: ['Numbers to 100', 'Operations', 'Shapes', 'Measurement', 'Fractions'], hodder: ['Numbers', 'Operations', 'Geometry', 'Measurement', 'Data'], oxford: ['Numbers to 100', 'Operations', 'Shapes', 'Time', 'Fractions'], pearson: ['Numbers', 'Operations', 'Shapes', 'Measurement'] },
        '3': { cambridge_press: ['Numbers to 1000', 'Addition and Subtraction', 'Multiplication and Division', 'Fractions', 'Angles and Shapes', 'Measurement', 'Time', 'Data Handling'], collins: ['Numbers to 1000', 'Operations', 'Fractions', 'Geometry', 'Measurement', 'Data'], hodder: ['Place Value', 'Operations', 'Fractions', 'Shapes', 'Measurement', 'Data'], oxford: ['Numbers', 'Operations', 'Fractions', 'Shapes', 'Measurement'], pearson: ['Numbers', 'Operations', 'Fractions', 'Geometry', 'Data'] },
        '4': { cambridge_press: ['Place Value and Ordering', 'Addition and Subtraction', 'Multiplication and Division', 'Fractions and Decimals', '2D and 3D Shapes', 'Symmetry', 'Measurement', 'Area and Perimeter', 'Data Handling', 'Position and Movement'], collins: ['Place Value', 'Operations', 'Fractions', 'Decimals', 'Geometry', 'Measurement', 'Data'], hodder: ['Numbers', 'Operations', 'Fractions and Decimals', 'Geometry', 'Measurement', 'Statistics'], oxford: ['Place Value', 'Operations', 'Fractions', 'Geometry', 'Measurement', 'Data'], pearson: ['Numbers', 'Operations', 'Fractions', 'Geometry', 'Measurement'] },
        '5': { cambridge_press: ['Whole Numbers', 'Fractions, Decimals and Percentages', 'Ratio and Proportion', 'Algebra', '2D and 3D Shapes', 'Angles', 'Measurement', 'Area and Perimeter', 'Data Handling', 'Probability'], collins: ['Numbers', 'Fractions and Decimals', 'Percentages', 'Algebra', 'Geometry', 'Measurement', 'Statistics'], hodder: ['Numbers', 'Fractions', 'Decimals', 'Geometry', 'Measurement', 'Data', 'Probability'], oxford: ['Numbers', 'Fractions', 'Geometry', 'Measurement', 'Data Handling'], pearson: ['Numbers', 'Fractions', 'Decimals', 'Geometry', 'Statistics'] },
        '6': { cambridge_press: ['Integers', 'Sequences and Functions', 'Place Value, Ordering and Rounding', 'Fractions, Decimals and Percentages', 'Angles', 'Planning and Collecting Data', 'Fractions Calculations', 'Symmetry', 'Expressions and Equations', 'Averages', 'Ratio and Proportion', 'Area, Perimeter and Volume', 'Probability'], collins: ['Integers', 'Fractions', 'Decimals', 'Percentages', 'Algebra', 'Geometry', 'Data', 'Probability'], hodder: ['Number', 'Algebra', 'Geometry', 'Measure', 'Statistics'], oxford: ['Integers', 'Algebra', 'Fractions', 'Geometry', 'Statistics'], pearson: ['Number', 'Algebra', 'Geometry', 'Statistics'] },
        '7': { cambridge_press: ['Integers', 'Expressions', 'Shapes and Constructions', 'Collecting Data', 'Fractions', 'Angles', 'Equations', 'Decimals', 'Area and Perimeter', 'Transformations', 'Ratio and Proportion', 'Probability', 'Sequences'], collins: ['Number', 'Algebra', 'Geometry', 'Statistics', 'Ratio and Proportion'], hodder: ['Number', 'Algebra', 'Geometry', 'Measure', 'Statistics'], oxford: ['Numbers', 'Algebra', 'Geometry', 'Statistics'], pearson: ['Number', 'Algebra', 'Geometry', 'Statistics'] },
        '8': { cambridge_press: ['Number', 'Algebra', 'Geometry', 'Measure', 'Handling Data', 'Problem Solving'], collins: ['Number', 'Algebra', 'Geometry', 'Statistics', 'Probability'], hodder: ['Number', 'Algebra', 'Geometry', 'Statistics'], oxford: ['Number', 'Algebra', 'Shape and Space', 'Data Handling'], pearson: ['Number', 'Algebra', 'Geometry', 'Statistics'] },
        '9': { cambridge_press: ['Number', 'Algebra', 'Functions and Graphs', 'Coordinate Geometry', 'Geometry', 'Mensuration', 'Trigonometry', 'Statistics and Probability', 'Sets'], collins: ['Number', 'Algebra', 'Geometry', 'Trigonometry', 'Statistics'], hodder: ['Number', 'Algebra', 'Functions', 'Geometry', 'Trigonometry', 'Statistics'], oxford: ['Number', 'Algebra', 'Geometry', 'Trigonometry', 'Statistics'], pearson: ['Number', 'Algebra', 'Geometry', 'Statistics'] },
        '10': { cambridge_press: ['Number', 'Algebra and Graphs', 'Coordinate Geometry', 'Geometry', 'Mensuration', 'Trigonometry', 'Vectors and Transformations', 'Probability', 'Statistics'], collins: ['Number', 'Algebra', 'Geometry', 'Trigonometry', 'Statistics', 'Probability'], hodder: ['Number', 'Algebra', 'Geometry', 'Trigonometry', 'Statistics', 'Probability'], oxford: ['Number', 'Algebra', 'Shape, Space and Measures', 'Data Handling'], pearson: ['Number', 'Algebra', 'Geometry', 'Statistics'] },
        '11': { cambridge_press: ['Quadratics', 'Functions', 'Coordinate Geometry', 'Circular Measure', 'Trigonometry', 'Series', 'Differentiation', 'Integration', 'Vectors', 'Probability and Statistics'], collins: ['Pure Mathematics', 'Statistics', 'Mechanics'], hodder: ['Algebra', 'Functions', 'Coordinate Geometry', 'Trigonometry', 'Calculus', 'Statistics'], oxford: ['Algebra', 'Functions', 'Calculus', 'Statistics'], pearson: ['Pure Mathematics', 'Statistics', 'Mechanics'] },
        '12': { cambridge_press: ['Algebra', 'Logarithmic and Exponential Functions', 'Trigonometry', 'Differentiation', 'Integration', 'Numerical Solutions of Equations', 'Vectors', 'Differential Equations', 'Complex Numbers', 'Probability and Statistics'], collins: ['Pure Mathematics', 'Mechanics', 'Statistics'], hodder: ['Further Algebra', 'Calculus', 'Differential Equations', 'Complex Numbers', 'Statistics'], oxford: ['Pure Mathematics', 'Statistics', 'Mechanics'], pearson: ['Further Pure', 'Statistics', 'Mechanics'] }
      },
      english: {
        '1': { cambridge_press: ['Phonics and Reading', 'Handwriting', 'Speaking and Listening', 'Simple Sentences', 'Stories and Rhymes'], collins: ['Phonics', 'Reading', 'Writing', 'Speaking'], oxford: ['Phonics', 'Reading', 'Stories'], pearson: ['Alphabet', 'Reading', 'Writing'] },
        '2': { cambridge_press: ['Reading Comprehension', 'Grammar Basics', 'Spelling', 'Writing Sentences', 'Stories'], collins: ['Reading', 'Grammar', 'Writing', 'Spelling'], oxford: ['Reading', 'Grammar', 'Writing'], pearson: ['Reading', 'Grammar', 'Writing'] },
        '3': { cambridge_press: ['Reading Skills', 'Grammar', 'Vocabulary', 'Writing', 'Poetry'], collins: ['Reading', 'Grammar', 'Vocabulary', 'Creative Writing'], oxford: ['Reading', 'Grammar', 'Writing'], pearson: ['Reading', 'Grammar', 'Writing'] },
        '4': { cambridge_press: ['Reading Comprehension', 'Grammar and Punctuation', 'Vocabulary Development', 'Writing - Narrative', 'Writing - Non-fiction', 'Poetry'], collins: ['Comprehension', 'Grammar', 'Vocabulary', 'Writing'], oxford: ['Reading', 'Grammar', 'Writing'], pearson: ['Comprehension', 'Grammar', 'Writing'] },
        '5': { cambridge_press: ['Reading Comprehension', 'Advanced Grammar', 'Vocabulary', 'Narrative Writing', 'Report Writing', 'Poetry Analysis'], collins: ['Comprehension', 'Grammar', 'Writing', 'Literature'], oxford: ['Reading', 'Grammar', 'Writing', 'Literature'], pearson: ['Comprehension', 'Grammar', 'Writing'] },
        '6': { cambridge_press: ['Reading and Comprehension', 'Grammar', 'Vocabulary', 'Narrative Writing', 'Descriptive Writing', 'Poetry'], collins: ['Reading', 'Grammar', 'Writing', 'Literature'], oxford: ['Reading', 'Grammar', 'Writing'], pearson: ['Comprehension', 'Grammar', 'Writing'] },
        '7': { cambridge_press: ['Reading Comprehension', 'Grammar and Syntax', 'Vocabulary', 'Creative Writing', 'Persuasive Writing', 'Poetry and Drama'], collins: ['Comprehension', 'Grammar', 'Writing', 'Literature'], oxford: ['Reading', 'Grammar', 'Writing', 'Literature'], pearson: ['Comprehension', 'Grammar', 'Writing'] },
        '8': { cambridge_press: ['Advanced Reading', 'Grammar and Usage', 'Vocabulary Building', 'Narrative and Descriptive Writing', 'Argumentative Writing', 'Literature Analysis'], collins: ['Comprehension', 'Grammar', 'Writing', 'Literature'], oxford: ['Reading', 'Grammar', 'Writing', 'Literature'], pearson: ['Comprehension', 'Grammar', 'Writing'] },
        '9': { cambridge_press: ['Reading and Directed Writing', 'Composition', 'Language Analysis', 'Grammar Review', 'Literature - Prose', 'Literature - Poetry', 'Literature - Drama'], collins: ['Reading', 'Writing', 'Literature'], oxford: ['Reading', 'Writing', 'Literature', 'Grammar'], pearson: ['Reading', 'Writing', 'Literature'] },
        '10': { cambridge_press: ['Reading Passages', 'Summary Writing', 'Directed Writing', 'Composition', 'Language Analysis', 'Literature - Prose', 'Literature - Poetry', 'Literature - Drama'], collins: ['Reading', 'Writing', 'Literature'], oxford: ['Reading', 'Writing', 'Literature'], pearson: ['Reading', 'Writing', 'Literature'] },
        '11': { cambridge_press: ['Reading Comprehension', 'Directed Writing', 'Language Analysis', 'Literature - Prose', 'Literature - Poetry', 'Literature - Drama', 'Coursework'], collins: ['Language', 'Literature', 'Writing'], oxford: ['Language', 'Literature'], pearson: ['Language', 'Literature'] },
        '12': { cambridge_press: ['Advanced Reading', 'Critical Writing', 'Language Analysis', 'Literature Studies', 'Comparative Analysis', 'Research Skills'], collins: ['Language', 'Literature', 'Critical Writing'], oxford: ['Language', 'Literature'], pearson: ['Language', 'Literature'] }
      },
      science: {
        '1': { cambridge_press: ['Plants', 'Animals', 'Materials', 'Sound', 'Seasons'], collins: ['Living Things', 'Materials', 'Physical Processes'], oxford: ['Plants', 'Animals', 'Materials'], hodder: ['Living Things', 'Materials', 'Forces'] },
        '2': { cambridge_press: ['Living Things and their Habitats', 'Materials and their Properties', 'Forces and Movement', 'Light and Dark', 'Health and Hygiene'], collins: ['Living Things', 'Materials', 'Forces', 'Light'], oxford: ['Living Things', 'Materials', 'Forces'], hodder: ['Living Things', 'Materials', 'Forces', 'Light'] },
        '3': { cambridge_press: ['Plants', 'Animals including Humans', 'Rocks and Soils', 'Light and Shadows', 'Forces and Magnets'], collins: ['Plants', 'Animals', 'Rocks', 'Light', 'Forces'], oxford: ['Plants', 'Animals', 'Rocks', 'Light'], hodder: ['Life Processes', 'Materials', 'Physical Processes'] },
        '4': { cambridge_press: ['Living Things', 'States of Matter', 'Sound', 'Electricity', 'Teeth and Eating', 'Habitats'], collins: ['Living Things', 'Materials', 'Sound', 'Electricity'], oxford: ['Living Things', 'Materials', 'Electricity'], hodder: ['Life Processes', 'Materials', 'Physical Processes'] },
        '5': { cambridge_press: ['Living Things and Life Cycles', 'Properties and Changes of Materials', 'Earth and Space', 'Forces', 'Separating Mixtures'], collins: ['Living Things', 'Materials', 'Earth and Space', 'Forces'], oxford: ['Living Things', 'Materials', 'Forces'], hodder: ['Life Processes', 'Materials', 'Physical Processes'] },
        '6': { cambridge_press: ['Cells and Organisms', 'Diet and Nutrition', 'States of Matter', 'Changes of State', 'Forces and Motion', 'Energy and Electricity', 'The Solar System'], collins: ['Cells', 'Food and Digestion', 'Materials', 'Forces', 'Energy'], oxford: ['Cells', 'Nutrition', 'Materials', 'Forces', 'Energy'], hodder: ['Biology', 'Chemistry', 'Physics'] },
        '7': { cambridge_press: ['Reproduction in Plants', 'Reproduction in Animals', 'Classification', 'Acids and Alkalis', 'Chemical Reactions', 'Energy', 'Light', 'Sound'], collins: ['Life Processes', 'Materials', 'Energy'], oxford: ['Biology', 'Chemistry', 'Physics'], hodder: ['Biology', 'Chemistry', 'Physics'] },
        '8': { cambridge_press: ['Food and Digestion', 'Respiration and Circulation', 'Elements, Compounds and Mixtures', 'Rocks and Weathering', 'Forces', 'Light', 'Sound', 'Magnetism'], collins: ['Life Processes', 'Materials', 'Physical Processes'], oxford: ['Biology', 'Chemistry', 'Physics'], hodder: ['Biology', 'Chemistry', 'Physics'] }
      },
      physics: {
        '9': { cambridge_press: ['Motion', 'Forces', 'Energy', 'Thermal Physics', 'Waves', 'Electricity', 'Magnetism', 'Nuclear Physics'], hodder: ['Motion', 'Forces', 'Energy', 'Thermal Physics', 'Waves', 'Electricity', 'Magnetism'], oxford: ['Mechanics', 'Energy', 'Waves', 'Electricity', 'Nuclear Physics'] },
        '10': { cambridge_press: ['General Physics', 'Thermal Physics', 'Properties of Waves', 'Electricity and Magnetism', 'Atomic Physics', 'Nuclear Physics'], hodder: ['General Physics', 'Thermal Physics', 'Waves', 'Electricity', 'Atomic Physics'], oxford: ['Mechanics', 'Thermal Physics', 'Waves', 'Electricity', 'Modern Physics'] },
        '11': { cambridge_press: ['Physical Quantities and Units', 'Kinematics', 'Dynamics', 'Forces, Density and Pressure', 'Work, Energy and Power', 'Deformation of Solids', 'Waves', 'Superposition', 'Electricity', 'DC Circuits', 'Nuclear Physics'], hodder: ['Measurement', 'Kinematics', 'Dynamics', 'Forces', 'Energy', 'Waves', 'Electricity'], oxford: ['Mechanics', 'Waves', 'Electricity', 'Nuclear Physics'] },
        '12': { cambridge_press: ['Motion in a Circle', 'Gravitational Fields', 'Temperature', 'Ideal Gases', 'Thermodynamics', 'Oscillations', 'Electric Fields', 'Capacitance', 'Magnetic Fields', 'Electromagnetic Induction', 'Alternating Currents', 'Quantum Physics', 'Nuclear Physics', 'Medical Physics'], hodder: ['Circular Motion', 'Gravitational Fields', 'Oscillations', 'Thermal Physics', 'Electric Fields', 'Magnetic Fields', 'Quantum Physics'], oxford: ['Fields', 'Thermal Physics', 'Oscillations', 'Quantum Physics', 'Nuclear Physics'] }
      },
      chemistry: {
        '9': { cambridge_press: ['States of Matter', 'Atoms, Elements and Compounds', 'Stoichiometry', 'Electrochemistry', 'Chemical Energetics', 'Chemical Reactions', 'Acids and Bases', 'The Periodic Table', 'Metals', 'Atmosphere and Environment', 'Organic Chemistry'], hodder: ['Particles', 'Elements and Compounds', 'Reactions', 'Acids', 'Metals', 'Organic Chemistry'], oxford: ['Atomic Structure', 'Bonding', 'Reactions', 'Organic Chemistry'] },
        '10': { cambridge_press: ['The Particulate Nature of Matter', 'Experimental Techniques', 'Atoms, Elements and Compounds', 'Stoichiometry', 'Electricity and Chemistry', 'Chemical Energetics', 'Chemical Reactions', 'Acids, Bases and Salts', 'The Periodic Table', 'Metals', 'Air and Water', 'Organic Chemistry'], hodder: ['Particles', 'Atoms', 'Stoichiometry', 'Electrochemistry', 'Energetics', 'Reactions', 'Organic Chemistry'], oxford: ['Atoms', 'Bonding', 'Reactions', 'Metals', 'Organic Chemistry'] },
        '11': { cambridge_press: ['Atoms, Molecules and Stoichiometry', 'Atomic Structure', 'Chemical Bonding', 'States of Matter', 'Chemical Energetics', 'Electrochemistry', 'Equilibria', 'Reaction Kinetics', 'The Periodic Table', 'Group 2', 'Group 17', 'Nitrogen and Sulfur', 'Introduction to Organic Chemistry', 'Hydrocarbons', 'Halogen Derivatives', 'Hydroxy Compounds', 'Carbonyl Compounds'], hodder: ['Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry'], oxford: ['Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry'] },
        '12': { cambridge_press: ['Chemical Energetics', 'Electrochemistry', 'Equilibria', 'Reaction Kinetics', 'Group 2', 'Chemistry of Transition Elements', 'Nitrogen and Sulfur', 'Organic Chemistry - Analytical Techniques', 'Organic Chemistry - Carboxylic Acids', 'Organic Chemistry - Nitrogen Compounds', 'Polymerisation', 'Organic Synthesis'], hodder: ['Advanced Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry'], oxford: ['Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry'] }
      },
      biology: {
        '9': { cambridge_press: ['Cell Structure', 'Biological Molecules', 'Movement in and out of Cells', 'Enzymes', 'Plant Nutrition', 'Animal Nutrition', 'Transport in Plants', 'Transport in Animals', 'Gas Exchange', 'Respiration', 'Coordination and Response', 'Reproduction', 'Inheritance', 'Ecology', 'Human Influences on Ecosystems'], hodder: ['Cells', 'Nutrition', 'Transport', 'Respiration', 'Reproduction', 'Ecology'], oxford: ['Cells', 'Movement of Substances', 'Nutrition', 'Respiration', 'Ecology'] },
        '10': { cambridge_press: ['Cell Structure and Organisation', 'Diffusion and Osmosis', 'Enzymes', 'Plant and Animal Nutrition', 'Transportation', 'Respiration', 'Excretion', 'Coordination and Response', 'Reproduction', 'Inheritance', 'Organisms and their Environment'], hodder: ['Cells', 'Nutrition', 'Transport', 'Respiration', 'Reproduction', 'Ecology'], oxford: ['Cells', 'Nutrition', 'Transport', 'Genetics', 'Ecology'] },
        '11': { cambridge_press: ['Cell Structure', 'Biological Molecules', 'Enzymes', 'Cell Membranes and Transport', 'The Mitotic Cell Cycle', 'Nucleic Acids and Protein Synthesis', 'Transport in Plants', 'Transport in Mammals', 'Gas Exchange', 'Infectious Diseases', 'Immunity'], hodder: ['Cell Biology', 'Biological Molecules', 'Gas Exchange', 'Transport', 'Infectious Disease'], oxford: ['Cells', 'Molecules', 'Transport', 'Disease', 'Ecology'] },
        '12': { cambridge_press: ['Energy and Respiration', 'Photosynthesis', 'Homeostasis', 'Coordination', 'Inherited Change', 'Selection and Evolution', 'Biodiversity, Classification and Conservation', 'Genetic Technology', 'Ecosystems'], hodder: ['Energy', 'Photosynthesis', 'Homeostasis', 'Genetics', 'Ecology'], oxford: ['Respiration', 'Photosynthesis', 'Genetics', 'Ecology'] }
      },
      global_perspectives: {
        '1': { cambridge_press: ['Ourselves', 'Our Community', 'Our World'], collins: ['People and Places', 'Our Environment'] },
        '2': { cambridge_press: ['People and Communities', 'Environment', 'Citizenship'], collins: ['People', 'Our World', 'Being Fair'] },
        '3': { cambridge_press: ['Culture and Identity', 'Economic Development', 'Environmental Sustainability'], collins: ['Identity', 'Economy', 'Environment'] },
        '4': { cambridge_press: ['Human Rights', 'Conflict Resolution', 'Sustainability', 'Media and Communication'], collins: ['Rights', 'Peace', 'Environment', 'Media'] },
        '5': { cambridge_press: ['Global Citizenship', 'Peace and Conflict', 'Technology and Innovation', 'Environmental Issues'], collins: ['Citizenship', 'Conflict', 'Technology', 'Environment'] },
        '6': { cambridge_press: ['Demographic Change', 'Education for All', 'Employment', 'Sustainability', 'Trade and Aid'], collins: ['Population', 'Education', 'Work', 'Environment'] },
        '7': { cambridge_press: ['Disease and Health', 'Human Rights', 'Migration', 'Poverty and Inequality', 'Sustainability'], collins: ['Health', 'Rights', 'Population', 'Development'] },
        '8': { cambridge_press: ['Conflict and Peace', 'Law and Criminality', 'Media and Information', 'Sport and Recreation', 'Transport and Infrastructure'], collins: ['Conflict', 'Law', 'Media', 'Infrastructure'] }
      },
      ict: {
        '6': { cambridge_press: ['Computer Systems', 'Using the Internet', 'Word Processing', 'Spreadsheets', 'Presentations', 'Digital Graphics'], hodder: ['Computer Basics', 'Internet', 'Applications', 'Digital Literacy'] },
        '7': { cambridge_press: ['Data and Information', 'Advanced Word Processing', 'Spreadsheet Modelling', 'Database Design', 'Web Development', 'Digital Communication'], hodder: ['Data Handling', 'Applications', 'Web Design', 'Programming'] },
        '8': { cambridge_press: ['Networks', 'Advanced Spreadsheets', 'Database Management', 'Web Development', 'Programming Basics', 'Digital Video and Audio', 'Cyber Security'], hodder: ['Networks', 'Databases', 'Programming', 'Web', 'Security'] }
      },
      computer_science: {
        '1': { cambridge_press: ['Using a Computer', 'Keyboard and Mouse Skills', 'Drawing Tools', 'Digital Stories', 'Safe Use of Technology'], hodder: ['Computer Basics', 'Using Devices', 'Digital Creativity'] },
        '2': { cambridge_press: ['Parts of a Computer', 'Typing and Text', 'Pictures and Shapes', 'Simple Coding Patterns', 'Online Safety'], hodder: ['Computer Parts', 'Typing', 'Digital Art', 'Safety'] },
        '3': { cambridge_press: ['Input and Output Devices', 'Files and Folders', 'Multimedia', 'Sequencing and Algorithms', 'Scratch Basics'], hodder: ['Devices', 'Files', 'Algorithms', 'Scratch'] },
        '4': { cambridge_press: ['Computer Systems', 'Word Processing', 'Presentations', 'Programming with Blocks', 'Internet Research', 'Responsible Technology Use'], hodder: ['Computer Systems', 'Documents', 'Presentations', 'Programming'] },
        '5': { cambridge_press: ['Data Handling', 'Spreadsheets', 'Animations and Games', 'Introduction to Coding', 'Networks', 'Digital Safety'], hodder: ['Data', 'Spreadsheets', 'Coding', 'Networks'] },
        '6': { cambridge_press: ['Computer Systems', 'Input and Output Devices', 'Digital Text and Media', 'Internet Safety', 'Algorithms', 'Visual Programming'], hodder: ['Computer Basics', 'Digital Media', 'Internet Safety', 'Programming Basics'] },
        '7': { cambridge_press: ['Data and Information', 'Binary and Data Representation', 'Programming Concepts', 'Spreadsheets', 'Web Design Basics', 'Digital Communication'], hodder: ['Data Representation', 'Applications', 'Programming', 'Web Design'] },
        '8': { cambridge_press: ['Networks', 'Databases', 'Programming Logic', 'Web Development', 'Cyber Security', 'Digital Content Creation'], hodder: ['Networks', 'Databases', 'Programming', 'Security'] },
        '9': { cambridge_press: ['Data Representation', 'Communication and Internet Technologies', 'Hardware', 'Software', 'Security', 'Ethics', 'Algorithm Design and Problem Solving', 'Programming', 'Databases'], hodder: ['Theory', 'Programming', 'Databases'] },
        '10': { cambridge_press: ['Data Representation', 'Communication', 'Hardware and Software', 'Security and Ethics', 'Algorithm Design', 'Programming', 'Databases'], hodder: ['Theory', 'Programming', 'Problem Solving'] },
        '11': { cambridge_press: ['Information Representation', 'Communication', 'Hardware', 'Processor Fundamentals', 'System Software', 'Security, Privacy and Data Integrity', 'Ethics and Ownership', 'Databases', 'Algorithm Design', 'Data Types and Structures', 'Programming', 'Software Development'], hodder: ['Theory of Computing', 'Programming', 'Algorithms'] },
        '12': { cambridge_press: ['Algorithms', 'Recursion', 'Data Structures', 'Software Engineering', 'Databases', 'Boolean Algebra', 'Processors', 'System Software', 'Communication', 'Security', 'Artificial Intelligence'], hodder: ['Advanced Theory', 'Data Structures', 'Algorithms', 'AI'] }
      },
      economics: {
        '9': { cambridge_press: ['The Basic Economic Problem', 'The Allocation of Resources', 'Microeconomic Decision Makers', 'Government and the Macroeconomy', 'Economic Development', 'International Trade and Globalisation'], hodder: ['Basic Problem', 'Markets', 'Government', 'International Economics'], oxford: ['Economic Problem', 'Supply and Demand', 'Government', 'Trade'] },
        '10': { cambridge_press: ['The Basic Economic Problem', 'The Allocation of Resources', 'Microeconomic Decision Makers', 'Government and the Macroeconomy', 'Economic Development', 'International Trade and Globalisation'], hodder: ['Economic Theory', 'Markets', 'Government Policy', 'Global Economics'], oxford: ['Economic Problem', 'Markets', 'Government', 'International'] },
        '11': { cambridge_press: ['Basic Economic Ideas and Resource Allocation', 'The Price System and the Microeconomy', 'Government Microeconomic Intervention', 'The Macroeconomy', 'Government Macroeconomic Intervention'], hodder: ['Microeconomics', 'Macroeconomics', 'Government Policy'], oxford: ['Microeconomics', 'Macroeconomics'] },
        '12': { cambridge_press: ['The Price System and the Microeconomy', 'Government Microeconomic Intervention', 'The Macroeconomy', 'Government Macroeconomic Intervention', 'International Economic Issues'], hodder: ['Advanced Microeconomics', 'Advanced Macroeconomics', 'International Economics'], oxford: ['Market Theory', 'Macroeconomic Theory', 'International Economics'] }
      }
    }
  }
};

/**
 * Get a fallback list of topics when specific publisher mapping isn't available
 */
function getDefaultTopics(board, subject, grade) {
  const boardTopics = curriculumData.topics[board];
  if (!boardTopics) return [];

  const subjectTopics = boardTopics[subject];
  if (!subjectTopics) return [];

  const gradeTopics = subjectTopics[grade];
  if (!gradeTopics) return [];

  // Return the first available publisher's topics
  const publishers = Object.keys(gradeTopics);
  if (publishers.length > 0) {
    return gradeTopics[publishers[0]];
  }
  return [];
}

module.exports = { curriculumData, getDefaultTopics };
