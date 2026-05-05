type TopicsByPublisher = Record<string, string[]>;
type TopicsByGrade = Record<string, TopicsByPublisher>;
type TopicsBySubject = Record<string, TopicsByGrade>;

interface CurriculumData {
  boards: { id: string; name: string }[];
  grades: Record<string, { id: string; name: string }[]>;
  subjects: Record<string, Record<string, { id: string; name: string }[]>>;
  publishers: Record<string, Record<string, { id: string; name: string }[]>>;
  topics: Record<string, TopicsBySubject>;
}

export const curriculumData: CurriculumData = {
  boards: [
    { id: 'cbse', name: 'CBSE' },
    { id: 'cambridge', name: 'Cambridge' },
  ],

  grades: {
    cbse: [
      { id: '1', name: 'Grade 1' }, { id: '2', name: 'Grade 2' }, { id: '3', name: 'Grade 3' },
      { id: '4', name: 'Grade 4' }, { id: '5', name: 'Grade 5' }, { id: '6', name: 'Grade 6' },
      { id: '7', name: 'Grade 7' }, { id: '8', name: 'Grade 8' }, { id: '9', name: 'Grade 9' },
      { id: '10', name: 'Grade 10' }, { id: '11', name: 'Grade 11' }, { id: '12', name: 'Grade 12' },
    ],
    cambridge: [
      { id: '1', name: 'Grade 1' }, { id: '2', name: 'Grade 2' }, { id: '3', name: 'Grade 3' },
      { id: '4', name: 'Grade 4' }, { id: '5', name: 'Grade 5' }, { id: '6', name: 'Grade 6' },
      { id: '7', name: 'Grade 7' }, { id: '8', name: 'Grade 8' }, { id: '9', name: 'Grade 9 (IGCSE)' },
      { id: '10', name: 'Grade 10 (IGCSE)' }, { id: '11', name: 'Grade 11 (AS Level)' }, { id: '12', name: 'Grade 12 (A Level)' },
    ],
  },

  subjects: {
    cbse: {
      '1': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'evs', name: 'Environmental Studies (EVS)' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'hindi', name: 'Hindi' }],
      '2': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'evs', name: 'Environmental Studies (EVS)' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'hindi', name: 'Hindi' }],
      '3': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'evs', name: 'Environmental Studies (EVS)' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'hindi', name: 'Hindi' }],
      '4': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'evs', name: 'Environmental Studies (EVS)' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'hindi', name: 'Hindi' }],
      '5': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'evs', name: 'Environmental Studies (EVS)' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'hindi', name: 'Hindi' }],
      '6': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'social_science', name: 'Social Science' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'hindi', name: 'Hindi' }],
      '7': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'social_science', name: 'Social Science' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'hindi', name: 'Hindi' }],
      '8': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'social_science', name: 'Social Science' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'hindi', name: 'Hindi' }],
      '9': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'social_science', name: 'Social Science' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'hindi', name: 'Hindi' }],
      '10': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'social_science', name: 'Social Science' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'hindi', name: 'Hindi' }],
      '11': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'physics', name: 'Physics' }, { id: 'chemistry', name: 'Chemistry' }, { id: 'biology', name: 'Biology' }, { id: 'english', name: 'English' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'accountancy', name: 'Accountancy' }, { id: 'economics', name: 'Economics' }],
      '12': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'physics', name: 'Physics' }, { id: 'chemistry', name: 'Chemistry' }, { id: 'biology', name: 'Biology' }, { id: 'english', name: 'English' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'accountancy', name: 'Accountancy' }, { id: 'economics', name: 'Economics' }],
    },
    cambridge: {
      '1': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'global_perspectives', name: 'Global Perspectives' }],
      '2': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'global_perspectives', name: 'Global Perspectives' }],
      '3': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'global_perspectives', name: 'Global Perspectives' }],
      '4': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'global_perspectives', name: 'Global Perspectives' }],
      '5': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'global_perspectives', name: 'Global Perspectives' }],
      '6': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'global_perspectives', name: 'Global Perspectives' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'ict', name: 'ICT' }],
      '7': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'global_perspectives', name: 'Global Perspectives' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'ict', name: 'ICT' }],
      '8': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English' }, { id: 'science', name: 'Science' }, { id: 'global_perspectives', name: 'Global Perspectives' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'ict', name: 'ICT' }],
      '9': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English Language' }, { id: 'physics', name: 'Physics' }, { id: 'chemistry', name: 'Chemistry' }, { id: 'biology', name: 'Biology' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'economics', name: 'Economics' }],
      '10': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'english', name: 'English Language' }, { id: 'physics', name: 'Physics' }, { id: 'chemistry', name: 'Chemistry' }, { id: 'biology', name: 'Biology' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'economics', name: 'Economics' }],
      '11': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'physics', name: 'Physics' }, { id: 'chemistry', name: 'Chemistry' }, { id: 'biology', name: 'Biology' }, { id: 'english', name: 'English' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'economics', name: 'Economics' }],
      '12': [{ id: 'mathematics', name: 'Mathematics' }, { id: 'physics', name: 'Physics' }, { id: 'chemistry', name: 'Chemistry' }, { id: 'biology', name: 'Biology' }, { id: 'english', name: 'English' }, { id: 'computer_science', name: 'Computer Science' }, { id: 'economics', name: 'Economics' }],
    },
  },

  publishers: {
    cbse: {
      mathematics: [{ id: 'ncert', name: 'NCERT' }, { id: 'rd_sharma', name: 'R.D. Sharma' }, { id: 'rs_aggarwal', name: 'R.S. Aggarwal' }, { id: 'sl_arora', name: 'S.L. Arora' }],
      english: [{ id: 'ncert', name: 'NCERT' }, { id: 'oxford', name: 'Oxford University Press' }, { id: 'macmillan', name: 'Macmillan' }, { id: 'pearson', name: 'Pearson' }],
      science: [{ id: 'ncert', name: 'NCERT' }, { id: 'lakhmir_singh', name: 'Lakhmir Singh & Manjit Kaur' }, { id: 'sl_arora', name: 'S.L. Arora' }, { id: 'pearson', name: 'Pearson' }],
      evs: [{ id: 'ncert', name: 'NCERT' }, { id: 'oxford', name: 'Oxford University Press' }, { id: 'macmillan', name: 'Macmillan' }],
      social_science: [{ id: 'ncert', name: 'NCERT' }, { id: 'oxford', name: 'Oxford University Press' }, { id: 'pearson', name: 'Pearson' }],
      hindi: [{ id: 'ncert', name: 'NCERT' }, { id: 'madhubun', name: 'Madhubun (Vikas Publishing)' }],
      physics: [{ id: 'ncert', name: 'NCERT' }, { id: 'sl_arora', name: 'S.L. Arora' }, { id: 'hc_verma', name: 'H.C. Verma' }, { id: 'pradeep', name: "Pradeep's Publications" }],
      chemistry: [{ id: 'ncert', name: 'NCERT' }, { id: 'pradeep', name: "Pradeep's Publications" }, { id: 'op_tandon', name: 'O.P. Tandon' }, { id: 'modern_abc', name: 'Modern ABC' }],
      biology: [{ id: 'ncert', name: 'NCERT' }, { id: 'pradeep', name: "Pradeep's Publications" }, { id: 'truemans', name: "Trueman's Biology" }],
      computer_science: [{ id: 'ncert', name: 'NCERT' }, { id: 'sumita_arora', name: 'Sumita Arora' }, { id: 'preeti_arora', name: 'Preeti Arora' }],
      accountancy: [{ id: 'ncert', name: 'NCERT' }, { id: 'dk_goel', name: 'D.K. Goel' }, { id: 'ts_grewal', name: 'T.S. Grewal' }],
      economics: [{ id: 'ncert', name: 'NCERT' }, { id: 'sandeep_garg', name: 'Sandeep Garg' }, { id: 'tr_jain', name: 'T.R. Jain & V.K. Ohri' }],
    },
    cambridge: {
      mathematics: [{ id: 'cambridge_press', name: 'Cambridge University Press' }, { id: 'collins', name: 'Collins' }, { id: 'hodder', name: 'Hodder Education' }, { id: 'oxford', name: 'Oxford University Press' }, { id: 'pearson', name: 'Pearson' }],
      english: [{ id: 'cambridge_press', name: 'Cambridge University Press' }, { id: 'collins', name: 'Collins' }, { id: 'oxford', name: 'Oxford University Press' }, { id: 'pearson', name: 'Pearson' }],
      science: [{ id: 'cambridge_press', name: 'Cambridge University Press' }, { id: 'collins', name: 'Collins' }, { id: 'hodder', name: 'Hodder Education' }, { id: 'oxford', name: 'Oxford University Press' }],
      global_perspectives: [{ id: 'cambridge_press', name: 'Cambridge University Press' }, { id: 'collins', name: 'Collins' }],
      ict: [{ id: 'cambridge_press', name: 'Cambridge University Press' }, { id: 'hodder', name: 'Hodder Education' }],
      physics: [{ id: 'cambridge_press', name: 'Cambridge University Press' }, { id: 'hodder', name: 'Hodder Education' }, { id: 'oxford', name: 'Oxford University Press' }],
      chemistry: [{ id: 'cambridge_press', name: 'Cambridge University Press' }, { id: 'hodder', name: 'Hodder Education' }, { id: 'oxford', name: 'Oxford University Press' }],
      biology: [{ id: 'cambridge_press', name: 'Cambridge University Press' }, { id: 'hodder', name: 'Hodder Education' }, { id: 'oxford', name: 'Oxford University Press' }],
      computer_science: [{ id: 'cambridge_press', name: 'Cambridge University Press' }, { id: 'hodder', name: 'Hodder Education' }],
      economics: [{ id: 'cambridge_press', name: 'Cambridge University Press' }, { id: 'hodder', name: 'Hodder Education' }, { id: 'oxford', name: 'Oxford University Press' }],
    },
  },

  topics: {
    cbse: {
      mathematics: {
        '1': { ncert: ['Shapes and Space', 'Numbers from One to Nine', 'Addition', 'Subtraction', 'Numbers from Ten to Twenty', 'Time', 'Measurement', 'Numbers up to 50', 'Data Handling', 'Patterns', 'Numbers up to 100', 'Money', 'How Many'], rd_sharma: ['Numbers up to 100', 'Addition and Subtraction', 'Shapes and Patterns', 'Time and Money', 'Measurement', 'Data Handling'] },
        '2': { ncert: ['What is Long, What is Round?', 'Counting in Groups', 'How Much Can You Carry?', 'Counting in Tens', 'Patterns', 'Footprints', 'Jugs and Mugs', 'Tens and Ones', 'My Funday', 'Add Our Points', 'Lines and Lines', 'Give and Take', 'The Longest Step', 'Birds Come, Birds Go', 'How Many Ponytails?'], rd_sharma: ['Numbers up to 200', 'Addition and Subtraction', 'Multiplication', 'Measurement', 'Time', 'Patterns', 'Data Handling'] },
        '3': { ncert: ['Where to Look From', 'Fun with Numbers', 'Give and Take', 'Long and Short', 'Shapes and Designs', 'Fun with Give and Take', 'Time Goes On', 'Who is Heavier?', 'How Many Times?', 'Play with Patterns', 'Jugs and Mugs', 'Can We Share?', 'Smart Charts', 'Rupees and Paise'], rd_sharma: ['Numbers up to 1000', 'Addition and Subtraction', 'Multiplication', 'Division', 'Fractions', 'Measurement', 'Time', 'Geometry', 'Patterns', 'Data Handling'] },
        '4': { ncert: ['Building with Bricks', 'Long and Short', 'A Trip to Bhopal', 'Tick Tick Tick', 'The Way The World Looks', 'The Junk Seller', 'Jugs and Mugs', 'Carts and Wheels', 'Halves and Quarters', 'Play with Patterns', 'Tables and Shares', 'How Heavy? How Light?', 'Fields and Fences', 'Smart Charts'], rd_sharma: ['Large Numbers', 'Addition and Subtraction', 'Multiplication', 'Division', 'Factors and Multiples', 'Fractions and Decimals', 'Geometry', 'Perimeter and Area', 'Data Handling', 'Patterns'] },
        '5': { ncert: ['The Fish Tale', 'Shapes and Angles', 'How Many Squares?', 'Parts and Wholes', 'Does it Look the Same?', "Be My Multiple, I'll Be Your Factor", 'Can You See the Pattern?', 'Mapping Your Way', 'Boxes and Sketches', 'Tenths and Hundredths', 'Area and its Boundary', 'Smart Charts', 'Ways to Multiply and Divide', 'How Big? How Heavy?'], rd_sharma: ['Large Numbers', 'Roman Numerals', 'Operations', 'Factors and Multiples', 'HCF and LCM', 'Fractions', 'Decimals', 'Percentage', 'Profit and Loss', 'Geometry', 'Perimeter and Area', 'Volume', 'Data Handling'] },
        '6': { ncert: ['Knowing Our Numbers', 'Whole Numbers', 'Playing with Numbers', 'Basic Geometrical Ideas', 'Understanding Elementary Shapes', 'Integers', 'Fractions', 'Decimals', 'Data Handling', 'Mensuration', 'Algebra', 'Ratio and Proportion', 'Symmetry', 'Practical Geometry'], rd_sharma: ['Knowing Our Numbers', 'Playing with Numbers', 'Whole Numbers', 'Negative Numbers and Integers', 'Fractions', 'Decimals', 'Algebra', 'Ratio, Proportion and Unitary Method', 'Basic Geometrical Concepts', 'Angles', 'Triangles', 'Quadrilaterals', 'Circles', 'Constructions', 'Symmetry', 'Mensuration', 'Data Handling'] },
        '7': { ncert: ['Integers', 'Fractions and Decimals', 'Data Handling', 'Simple Equations', 'Lines and Angles', 'The Triangle and Its Properties', 'Congruence of Triangles', 'Comparing Quantities', 'Rational Numbers', 'Practical Geometry', 'Perimeter and Area', 'Algebraic Expressions', 'Exponents and Powers', 'Symmetry', 'Visualising Solid Shapes'], rd_sharma: ['Integers', 'Fractions', 'Decimals', 'Rational Numbers', 'Operations on Rational Numbers', 'Exponents', 'Algebraic Expressions', 'Linear Equations in One Variable', 'Ratio and Proportion', 'Percentage', 'Profit and Loss', 'Simple Interest', 'Lines and Angles', 'Properties of Triangles', 'Congruence', 'Symmetry', 'Perimeter and Area', 'Data Handling'] },
        '8': { ncert: ['Rational Numbers', 'Linear Equations in One Variable', 'Understanding Quadrilaterals', 'Practical Geometry', 'Data Handling', 'Squares and Square Roots', 'Cubes and Cube Roots', 'Comparing Quantities', 'Algebraic Expressions and Identities', 'Visualising Solid Shapes', 'Mensuration', 'Exponents and Powers', 'Direct and Inverse Proportions', 'Factorisation', 'Introduction to Graphs', 'Playing with Numbers'], rd_sharma: ['Rational Numbers', 'Powers', 'Squares and Square Roots', 'Cubes and Cube Roots', 'Algebraic Expressions', 'Factorization', 'Linear Equations', 'Quadrilaterals', 'Parallelograms', 'Data Handling', 'Percentage', 'Profit and Loss', 'Compound Interest', 'Mensuration', 'Graphs', 'Direct and Inverse Variation'] },
        '9': { ncert: ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations in Two Variables', "Introduction to Euclid's Geometry", 'Lines and Angles', 'Triangles', 'Quadrilaterals', 'Areas of Parallelograms and Triangles', 'Circles', 'Constructions', "Heron's Formula", 'Surface Areas and Volumes', 'Statistics', 'Probability'], rd_sharma: ['Number Systems', 'Exponents of Real Numbers', 'Rationalisation', 'Algebraic Identities', 'Factorisation of Algebraic Expressions', 'Factorisation of Polynomials', 'Linear Equations in Two Variables', 'Coordinate Geometry', 'Lines and Angles', 'Triangle and its Angles', 'Congruent Triangles', 'Quadrilaterals', 'Areas of Parallelograms and Triangles', 'Circles', 'Constructions', "Heron's Formula", 'Surface Areas and Volumes', 'Tabular Representation', 'Graphical Representation', 'Mean, Median and Mode', 'Probability'] },
        '10': { ncert: ['Real Numbers', 'Polynomials', 'Pair of Linear Equations in Two Variables', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Introduction to Trigonometry', 'Some Applications of Trigonometry', 'Circles', 'Constructions', 'Areas Related to Circles', 'Surface Areas and Volumes', 'Statistics', 'Probability'], rd_sharma: ['Real Numbers', 'Polynomials', 'Linear Equations in Two Variables', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Trigonometric Ratios', 'Trigonometric Identities', 'Heights and Distances', 'Circles', 'Constructions', 'Areas Related to Circles', 'Surface Areas and Volumes', 'Statistics', 'Probability'] },
        '11': { ncert: ['Sets', 'Relations and Functions', 'Trigonometric Functions', 'Principle of Mathematical Induction', 'Complex Numbers and Quadratic Equations', 'Linear Inequalities', 'Permutations and Combinations', 'Binomial Theorem', 'Sequences and Series', 'Straight Lines', 'Conic Sections', 'Introduction to Three Dimensional Geometry', 'Limits and Derivatives', 'Mathematical Reasoning', 'Statistics', 'Probability'], rd_sharma: ['Sets', 'Relations', 'Functions', 'Measurement of Angles', 'Trigonometric Functions', 'Graphs of Trigonometric Functions', 'Trigonometric Equations', 'Complex Numbers', 'Quadratic Equations', 'Linear Inequalities', 'Permutations', 'Combinations', 'Binomial Theorem', 'Arithmetic Progressions', 'Geometric Progressions', 'Straight Lines', 'Conic Sections', 'Three Dimensional Geometry', 'Limits', 'Derivatives', 'Statistics', 'Probability'] },
        '12': { ncert: ['Relations and Functions', 'Inverse Trigonometric Functions', 'Matrices', 'Determinants', 'Continuity and Differentiability', 'Application of Derivatives', 'Integrals', 'Application of Integrals', 'Differential Equations', 'Vector Algebra', 'Three Dimensional Geometry', 'Linear Programming', 'Probability'], rd_sharma: ['Relations and Functions', 'Inverse Trigonometric Functions', 'Matrices', 'Determinants', 'Adjoint and Inverse of a Matrix', 'Continuity', 'Differentiability', 'Differentiation', 'Applications of Derivatives', 'Indefinite Integrals', 'Definite Integrals', 'Areas of Bounded Regions', 'Differential Equations', 'Algebra of Vectors', 'Scalar Product', 'Vector Product', 'Three Dimensional Geometry', 'Linear Programming', 'Probability'] },
      },
      english: {
        '1': { ncert: ['Greetings and Introductions', 'Alphabet and Phonics', 'Simple Words', 'Short Sentences', 'Stories and Rhymes', 'Picture Reading', 'Action Words'] },
        '2': { ncert: ['Reading Comprehension', 'Grammar Basics', 'Nouns', 'Pronouns', 'Verbs', 'Simple Sentences', 'Stories', 'Poem Appreciation'] },
        '3': { ncert: ['Reading Comprehension', 'Nouns', 'Pronouns', 'Verbs', 'Adjectives', 'Articles', 'Sentence Formation', 'Story Writing', 'Poem Appreciation'] },
        '4': { ncert: ['Reading Comprehension', 'Parts of Speech', 'Tenses', 'Prepositions', 'Conjunctions', 'Paragraph Writing', 'Letter Writing', 'Story Writing'] },
        '5': { ncert: ['Reading Comprehension', 'Advanced Grammar', 'Tenses', 'Active and Passive Voice', 'Direct and Indirect Speech', 'Essay Writing', 'Letter Writing', 'Story Completion'] },
        '6': { ncert: ["Who Did Patrick's Homework?", 'How the Dog Found Himself a New Master!', "Taro's Reward", 'An Indian – American Woman in Space', 'A Different Kind of School', 'Who I Am', 'Fair Play', 'The Banyan Tree', 'Grammar - Tenses', 'Grammar - Voices', 'Writing Skills'] },
        '7': { ncert: ['Three Questions', 'A Gift of Chappals', 'Gopal and the Hilsa Fish', 'The Ashes That Made Trees Bloom', 'Quality', 'Expert Detectives', 'The Invention of Vita-Wonk', 'Grammar - Tenses', 'Grammar - Modals', 'Writing - Essay', 'Writing - Letter'] },
        '8': { ncert: ['The Best Christmas Present in the World', 'The Tsunami', 'Glimpses of the Past', "Bepin Choudhury's Lapse of Memory", 'The Summit Within', "This is Jody's Fawn", 'Grammar - Tenses', 'Grammar - Passive Voice', 'Writing - Diary Entry', 'Writing - Report'] },
        '9': { ncert: ['The Fun They Had', 'The Sound of Music', 'The Little Girl', 'A Truly Beautiful Mind', 'The Snake and the Mirror', 'My Childhood', 'Reach for the Top', 'Grammar - Tenses', 'Grammar - Reported Speech', 'Grammar - Conditionals', 'Writing - Article', 'Writing - Story'] },
        '10': { ncert: ['A Letter to God', 'Nelson Mandela', 'Two Stories about Flying', 'From the Diary of Anne Frank', 'Glimpses of India', 'Mijbil the Otter', 'Grammar - Tenses', 'Grammar - Modals', 'Grammar - Subject-Verb Agreement', 'Writing - Formal Letters', 'Writing - Analytical Paragraphs'] },
        '11': { ncert: ['The Portrait of a Lady', "We're Not Afraid to Die", 'Discovering Tut', 'Landscape of the Soul', 'The Ailing Planet', 'The Browning Version', 'The Adventure', 'Silk Road', 'Grammar and Writing Skills', 'Note-making and Summarizing'] },
        '12': { ncert: ['The Last Lesson', 'Lost Spring', 'Deep Water', 'The Rattrap', 'Indigo', 'Poets and Pancakes', 'The Interview', 'Going Places', 'Advanced Grammar', 'Writing - Reports and Articles', 'Writing - Letters and Applications'] },
      },
      science: {
        '6': { ncert: ['Food: Where Does it Come From?', 'Components of Food', 'Fibre to Fabric', 'Sorting Materials into Groups', 'Separation of Substances', 'Changes Around Us', 'Getting to Know Plants', 'Body Movements', 'The Living Organisms and Their Surroundings', 'Motion and Measurement of Distances', 'Light, Shadows and Reflections', 'Electricity and Circuits', 'Fun with Magnets', 'Water', 'Air Around Us', 'Garbage In, Garbage Out'] },
        '7': { ncert: ['Nutrition in Plants', 'Nutrition in Animals', 'Fibre to Fabric', 'Heat', 'Acids, Bases and Salts', 'Physical and Chemical Changes', 'Weather, Climate and Adaptations of Animals to Climate', 'Winds, Storms and Cyclones', 'Soil', 'Respiration in Organisms', 'Transportation in Animals and Plants', 'Reproduction in Plants', 'Motion and Time', 'Electric Current and its Effects', 'Light', 'Water: A Precious Resource', 'Forests: Our Lifeline', 'Wastewater Story'] },
        '8': { ncert: ['Crop Production and Management', 'Microorganisms', 'Synthetic Fibres and Plastics', 'Materials: Metals and Non-Metals', 'Coal and Petroleum', 'Combustion and Flame', 'Conservation of Plants and Animals', 'Cell - Structure and Functions', 'Reproduction in Animals', 'Reaching the Age of Adolescence', 'Force and Pressure', 'Friction', 'Sound', 'Chemical Effects of Electric Current', 'Some Natural Phenomena', 'Light', 'Stars and the Solar System', 'Pollution of Air and Water'] },
        '9': { ncert: ['Matter in Our Surroundings', 'Is Matter Around Us Pure?', 'Atoms and Molecules', 'Structure of the Atom', 'The Fundamental Unit of Life', 'Tissues', 'Diversity in Living Organisms', 'Motion', 'Force and Laws of Motion', 'Gravitation', 'Work and Energy', 'Sound', 'Why Do We Fall Ill?', 'Natural Resources', 'Improvement in Food Resources'] },
        '10': { ncert: ['Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals', 'Carbon and its Compounds', 'Periodic Classification of Elements', 'Life Processes', 'Control and Coordination', 'How do Organisms Reproduce?', 'Heredity and Evolution', 'Light - Reflection and Refraction', 'Human Eye and Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Sources of Energy', 'Our Environment', 'Management of Natural Resources'] },
      },
      evs: {
        '1': { ncert: ['My Family', 'My Body', 'Food We Eat', 'Clothes We Wear', 'Animals Around Us', 'Plants Around Us', 'Water', 'Weather', 'Festivals', 'My School'] },
        '2': { ncert: ['My Family and Friends', 'Plants and Animals', 'Food', 'Water', 'Shelter', 'Keeping Clean', 'Safety and First Aid', 'Weather and Seasons'] },
        '3': { ncert: ["Poonam's Day Out", 'The Plant Fairy', 'Water O Water!', 'Our First School', "Chhotu's House", 'Foods We Eat', 'Saying Without Speaking', 'Flying High', "It's Raining", 'What is Cooking?', 'From Here to There', 'Work We Do'] },
        '4': { ncert: ['Going to School', 'Ear to Ear', 'A Day with Nandu', 'The Story of Amrita', 'Anita and the Honeybees', "Omana's Journey", 'From the Window', "Reaching Grandmother's House", 'Changing Families', 'Hu Tu Tu, Hu Tu Tu', 'The Valley of Flowers', 'Changing Times'] },
        '5': { ncert: ['Super Senses', "A Snake Charmer's Story", 'From Tasting to Digesting', 'Mangoes Round the Year', 'Seeds and Seeds', 'Every Drop Counts', 'Experiments with Water', 'A Treat for Mosquitoes', 'Up You Go!', 'Walls Tell Stories', 'Sunita in Space', 'What if it Finishes?', 'A Shelter So High!', 'When the Earth Shook!', 'Blow Hot, Blow Cold'] },
      },
      social_science: {
        '6': { ncert: ['What, Where, How and When?', 'From Hunting-Gathering to Growing Food', 'In the Earliest Cities', 'What Books and Burials Tell Us', 'Kingdoms, Kings and an Early Republic', 'New Questions and Ideas', 'The Earth in the Solar System', 'Globe: Latitudes and Longitudes', 'Motions of the Earth', 'Maps', 'Understanding Diversity', 'Diversity and Discrimination', 'What is Government?', 'Key Elements of a Democratic Government'] },
        '7': { ncert: ['Tracing Changes through a Thousand Years', 'New Kings and Kingdoms', 'The Delhi Sultans', 'The Mughal Empire', 'Environment', 'Inside Our Earth', 'Our Changing Earth', 'Air', 'Water', 'Equality in Indian Democracy', 'Role of the Government in Health', 'How the State Government Works', 'Markets Around Us'] },
        '8': { ncert: ['How, When and Where', 'From Trade to Territory', 'Ruling the Countryside', 'Tribals, Dikus and the Vision of a Golden Age', 'When People Rebel', 'Resources', 'Land, Soil, Water, Natural Vegetation and Wildlife Resources', 'Agriculture', 'Industries', 'The Indian Constitution', 'Understanding Secularism', 'Parliament and the Making of Laws', 'Understanding Marginalisation'] },
        '9': { ncert: ['The French Revolution', 'Socialism in Europe and the Russian Revolution', 'Nazism and the Rise of Hitler', 'Forest Society and Colonialism', 'India – Size and Location', 'Physical Features of India', 'Drainage', 'Climate', 'Natural Vegetation and Wild Life', 'Population', 'Democracy in the Contemporary World', 'Constitutional Design', 'Electoral Politics', 'Working of Institutions', 'The Story of Village Palampur', 'People as Resource', 'Poverty as a Challenge', 'Food Security in India'] },
        '10': { ncert: ['The Rise of Nationalism in Europe', 'Nationalism in India', 'The Making of a Global World', 'The Age of Industrialisation', 'Print Culture and the Modern World', 'Resources and Development', 'Forest and Wildlife Resources', 'Water Resources', 'Agriculture', 'Minerals and Energy Resources', 'Manufacturing Industries', 'Power Sharing', 'Federalism', 'Democracy and Diversity', 'Gender, Religion and Caste', 'Political Parties', 'Outcomes of Democracy', 'Development', 'Sectors of the Indian Economy', 'Money and Credit', 'Globalisation and the Indian Economy'] },
      },
      hindi: {
        '1': { ncert: ['झूला', 'आम की कहानी', 'आम की टोकरी', 'पत्ते ही पत्ते', 'पकौड़ी', 'छुक-छुक गाड़ी', 'रसोईघर', 'चूहो! म्याऊँ सो रही है', 'बंदर और गिलहरी', 'पगड़ी', 'पतंग', 'गेंद-बल्ला'] },
        '6': { ncert: ['वह चिड़िया जो', 'बचपन', 'नादान दोस्त', 'चाँद से थोड़ी-सी गप्पें', 'अक्षरों का महत्व', 'पार नज़र के', 'साथी हाथ बढ़ाना', 'ऐसे-ऐसे', 'टिकट-अलबम', 'झाँसी की रानी', 'जो देखकर भी नहीं देखते', 'संसार पुस्तक है', 'व्याकरण - संज्ञा, सर्वनाम, क्रिया, विशेषण'] },
        '10': { ncert: ['सूरदास के पद', 'राम-लक्ष्मण-परशुराम संवाद', 'आत्मकथ्य', 'उत्साह', 'अट नहीं रही', 'यह दंतुरहित मुस्कान', 'फसल', 'छाया मत छूना', 'कन्यादान', 'संगतकार', 'नेताजी का चश्मा', 'बालगोबिन भगत', 'लखनवी अंदाज़', 'मानवीय करुणा की दिव्य चमक', 'व्याकरण और लेखन'] },
      },
      physics: {
        '11': { ncert: ['Physical World', 'Units and Measurements', 'Motion in a Straight Line', 'Motion in a Plane', 'Laws of Motion', 'Work, Energy and Power', 'System of Particles and Rotational Motion', 'Gravitation', 'Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Thermal Properties of Matter', 'Thermodynamics', 'Kinetic Theory', 'Oscillations', 'Waves'], hc_verma: ["Introduction to Physics", 'Kinematics', "Newton's Laws", 'Work and Energy', 'Circular Motion', 'Rotational Mechanics', 'Gravitation', 'Fluid Mechanics', 'Waves', 'Thermodynamics'] },
        '12': { ncert: ['Electric Charges and Fields', 'Electrostatic Potential and Capacitance', 'Current Electricity', 'Moving Charges and Magnetism', 'Magnetism and Matter', 'Electromagnetic Induction', 'Alternating Current', 'Electromagnetic Waves', 'Ray Optics and Optical Instruments', 'Wave Optics', 'Dual Nature of Radiation and Matter', 'Atoms', 'Nuclei', 'Semiconductor Electronics', 'Communication Systems'], hc_verma: ["Coulomb's Law", 'Electric Field', 'Capacitors', 'Current Electricity', 'Magnetic Field', 'EMI', 'AC Circuits', 'Optics', 'Modern Physics'] },
      },
      chemistry: {
        '11': { ncert: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements and Periodicity in Properties', 'Chemical Bonding and Molecular Structure', 'States of Matter', 'Thermodynamics', 'Equilibrium', 'Redox Reactions', 'Hydrogen', 'The s-Block Elements', 'The p-Block Elements', 'Organic Chemistry: Some Basic Principles and Techniques', 'Hydrocarbons', 'Environmental Chemistry'] },
        '12': { ncert: ['The Solid State', 'Solutions', 'Electrochemistry', 'Chemical Kinetics', 'Surface Chemistry', 'General Principles and Processes of Isolation of Elements', 'The p-Block Elements', 'The d- and f-Block Elements', 'Coordination Compounds', 'Haloalkanes and Haloarenes', 'Alcohols, Phenols and Ethers', 'Aldehydes, Ketones and Carboxylic Acids', 'Amines', 'Biomolecules', 'Polymers', 'Chemistry in Everyday Life'] },
      },
      biology: {
        '11': { ncert: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Structural Organisation in Animals', 'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle and Cell Division', 'Transport in Plants', 'Mineral Nutrition', 'Photosynthesis in Higher Plants', 'Respiration in Plants', 'Plant Growth and Development', 'Digestion and Absorption', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products and their Elimination', 'Locomotion and Movement', 'Neural Control and Coordination', 'Chemical Coordination and Integration'] },
        '12': { ncert: ['Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Evolution', 'Human Health and Disease', 'Strategies for Enhancement in Food Production', 'Microbes in Human Welfare', 'Biotechnology: Principles and Processes', 'Biotechnology and its Applications', 'Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation', 'Environmental Issues'] },
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
        '11': { ncert: ['Computer System', 'Number System', 'Emerging Trends', 'Introduction to Problem Solving', 'Getting Started with Python', 'Flow of Control', 'Functions', 'Strings', 'Lists', 'Tuples and Dictionaries', 'Societal Impacts'], sumita_arora: ['Computer Fundamentals', 'Number Systems', 'Python Fundamentals', 'Data Types', 'Flow of Control', 'Functions', 'Strings', 'Lists', 'Tuples', 'Dictionaries', 'Sorting'] },
        '12': { ncert: ['Exception Handling', 'File Handling', 'Stack', 'Queue', 'Searching', 'Sorting', 'Database Concepts', 'SQL', 'Computer Networks', 'Cyber Security'], sumita_arora: ['Exception Handling', 'File Handling', 'Data Structures', 'SQL', 'Database Concepts', 'Networking', 'Cyber Security', 'Python Libraries'] },
      },
      accountancy: {
        '11': { ncert: ['Introduction to Accounting', 'Theory Base of Accounting', 'Recording of Transactions – I', 'Recording of Transactions – II', 'Bank Reconciliation Statement', 'Trial Balance and Rectification of Errors', 'Depreciation, Provisions and Reserves', 'Bill of Exchange', 'Financial Statements – I', 'Financial Statements – II', 'Accounts from Incomplete Records', 'Applications of Computers in Accounting'] },
        '12': { ncert: ['Accounting for Not-for-Profit Organisation', 'Accounting for Partnership: Basic Concepts', 'Reconstitution of a Partnership Firm – Admission of a Partner', 'Reconstitution of a Partnership Firm – Retirement/Death of a Partner', 'Dissolution of Partnership Firm', 'Accounting for Share Capital', 'Issue and Redemption of Debentures', 'Financial Statements of a Company', 'Analysis of Financial Statements', 'Accounting Ratios', 'Cash Flow Statement'] },
      },
      economics: {
        '11': { ncert: ['Indian Economy on the Eve of Independence', 'Indian Economy 1950-1990', 'Liberalisation, Privatisation and Globalisation', 'Poverty', 'Human Capital Formation in India', 'Rural Development', 'Employment', 'Infrastructure', 'Environment and Sustainable Development', 'Statistics for Economics', 'Collection of Data', 'Organisation of Data', 'Presentation of Data', 'Measures of Central Tendency', 'Measures of Dispersion', 'Correlation', 'Index Numbers'] },
        '12': { ncert: ['Introduction to Macroeconomics', 'National Income Accounting', 'Money and Banking', 'Determination of Income and Employment', 'Government Budget and the Economy', 'Open Economy Macroeconomics', 'Introduction to Microeconomics', 'Theory of Consumer Behaviour', 'Production and Costs', 'Theory of the Firm under Perfect Competition', 'Market Equilibrium', 'Non-competitive Markets'] },
      },
    },
    cambridge: {
      mathematics: {
        '1': { cambridge_press: ['Numbers to 20', 'Addition and Subtraction within 20', 'Shapes and Patterns', 'Measurement: Length and Height', 'Time', 'Sorting and Classifying'] },
        '2': { cambridge_press: ['Numbers to 100', 'Addition and Subtraction', 'Multiplication and Division', '2D and 3D Shapes', 'Measurement: Length, Mass, Capacity', 'Time', 'Fractions', 'Position and Movement'] },
        '3': { cambridge_press: ['Numbers to 1000', 'Addition and Subtraction', 'Multiplication and Division', 'Fractions', 'Angles and Shapes', 'Measurement', 'Time', 'Data Handling'] },
        '4': { cambridge_press: ['Place Value and Ordering', 'Addition and Subtraction', 'Multiplication and Division', 'Fractions and Decimals', '2D and 3D Shapes', 'Symmetry', 'Measurement', 'Area and Perimeter', 'Data Handling', 'Position and Movement'] },
        '5': { cambridge_press: ['Whole Numbers', 'Fractions, Decimals and Percentages', 'Ratio and Proportion', 'Algebra', '2D and 3D Shapes', 'Angles', 'Measurement', 'Area and Perimeter', 'Data Handling', 'Probability'] },
        '6': { cambridge_press: ['Integers', 'Sequences and Functions', 'Place Value, Ordering and Rounding', 'Fractions, Decimals and Percentages', 'Angles', 'Planning and Collecting Data', 'Fractions Calculations', 'Symmetry', 'Expressions and Equations', 'Averages', 'Ratio and Proportion', 'Area, Perimeter and Volume', 'Probability'] },
        '7': { cambridge_press: ['Integers', 'Expressions', 'Shapes and Constructions', 'Collecting Data', 'Fractions', 'Angles', 'Equations', 'Decimals', 'Area and Perimeter', 'Transformations', 'Ratio and Proportion', 'Probability', 'Sequences'] },
        '8': { cambridge_press: ['Number', 'Algebra', 'Geometry', 'Measure', 'Handling Data', 'Problem Solving'] },
        '9': { cambridge_press: ['Number', 'Algebra', 'Functions and Graphs', 'Coordinate Geometry', 'Geometry', 'Mensuration', 'Trigonometry', 'Statistics and Probability', 'Sets'] },
        '10': { cambridge_press: ['Number', 'Algebra and Graphs', 'Coordinate Geometry', 'Geometry', 'Mensuration', 'Trigonometry', 'Vectors and Transformations', 'Probability', 'Statistics'] },
        '11': { cambridge_press: ['Quadratics', 'Functions', 'Coordinate Geometry', 'Circular Measure', 'Trigonometry', 'Series', 'Differentiation', 'Integration', 'Vectors', 'Probability and Statistics'] },
        '12': { cambridge_press: ['Algebra', 'Logarithmic and Exponential Functions', 'Trigonometry', 'Differentiation', 'Integration', 'Numerical Solutions of Equations', 'Vectors', 'Differential Equations', 'Complex Numbers', 'Probability and Statistics'] },
      },
      english: {
        '1': { cambridge_press: ['Phonics and Reading', 'Handwriting', 'Speaking and Listening', 'Simple Sentences', 'Stories and Rhymes'] },
        '2': { cambridge_press: ['Reading Comprehension', 'Grammar Basics', 'Spelling', 'Writing Sentences', 'Stories'] },
        '3': { cambridge_press: ['Reading Skills', 'Grammar', 'Vocabulary', 'Writing', 'Poetry'] },
        '4': { cambridge_press: ['Reading Comprehension', 'Grammar and Punctuation', 'Vocabulary Development', 'Writing - Narrative', 'Writing - Non-fiction', 'Poetry'] },
        '5': { cambridge_press: ['Reading Comprehension', 'Advanced Grammar', 'Vocabulary', 'Narrative Writing', 'Report Writing', 'Poetry Analysis'] },
        '6': { cambridge_press: ['Reading and Comprehension', 'Grammar', 'Vocabulary', 'Narrative Writing', 'Descriptive Writing', 'Poetry'] },
        '7': { cambridge_press: ['Reading Comprehension', 'Grammar and Syntax', 'Vocabulary', 'Creative Writing', 'Persuasive Writing', 'Poetry and Drama'] },
        '8': { cambridge_press: ['Advanced Reading', 'Grammar and Usage', 'Vocabulary Building', 'Narrative and Descriptive Writing', 'Argumentative Writing', 'Literature Analysis'] },
        '9': { cambridge_press: ['Reading and Directed Writing', 'Composition', 'Language Analysis', 'Grammar Review', 'Literature - Prose', 'Literature - Poetry', 'Literature - Drama'] },
        '10': { cambridge_press: ['Reading Passages', 'Summary Writing', 'Directed Writing', 'Composition', 'Language Analysis', 'Literature - Prose', 'Literature - Poetry', 'Literature - Drama'] },
        '11': { cambridge_press: ['Reading Comprehension', 'Directed Writing', 'Language Analysis', 'Literature - Prose', 'Literature - Poetry', 'Literature - Drama', 'Coursework'] },
        '12': { cambridge_press: ['Advanced Reading', 'Critical Writing', 'Language Analysis', 'Literature Studies', 'Comparative Analysis', 'Research Skills'] },
      },
      science: {
        '1': { cambridge_press: ['Plants', 'Animals', 'Materials', 'Sound', 'Seasons'] },
        '2': { cambridge_press: ['Living Things and their Habitats', 'Materials and their Properties', 'Forces and Movement', 'Light and Dark', 'Health and Hygiene'] },
        '3': { cambridge_press: ['Plants', 'Animals including Humans', 'Rocks and Soils', 'Light and Shadows', 'Forces and Magnets'] },
        '4': { cambridge_press: ['Living Things', 'States of Matter', 'Sound', 'Electricity', 'Teeth and Eating', 'Habitats'] },
        '5': { cambridge_press: ['Living Things and Life Cycles', 'Properties and Changes of Materials', 'Earth and Space', 'Forces', 'Separating Mixtures'] },
        '6': { cambridge_press: ['Cells and Organisms', 'Diet and Nutrition', 'States of Matter', 'Changes of State', 'Forces and Motion', 'Energy and Electricity', 'The Solar System'] },
        '7': { cambridge_press: ['Reproduction in Plants', 'Reproduction in Animals', 'Classification', 'Acids and Alkalis', 'Chemical Reactions', 'Energy', 'Light', 'Sound'] },
        '8': { cambridge_press: ['Food and Digestion', 'Respiration and Circulation', 'Elements, Compounds and Mixtures', 'Rocks and Weathering', 'Forces', 'Light', 'Sound', 'Magnetism'] },
      },
      physics: {
        '9': { cambridge_press: ['Motion', 'Forces', 'Energy', 'Thermal Physics', 'Waves', 'Electricity', 'Magnetism', 'Nuclear Physics'] },
        '10': { cambridge_press: ['General Physics', 'Thermal Physics', 'Properties of Waves', 'Electricity and Magnetism', 'Atomic Physics', 'Nuclear Physics'] },
        '11': { cambridge_press: ['Physical Quantities and Units', 'Kinematics', 'Dynamics', 'Forces, Density and Pressure', 'Work, Energy and Power', 'Deformation of Solids', 'Waves', 'Superposition', 'Electricity', 'DC Circuits', 'Nuclear Physics'] },
        '12': { cambridge_press: ['Motion in a Circle', 'Gravitational Fields', 'Temperature', 'Ideal Gases', 'Thermodynamics', 'Oscillations', 'Electric Fields', 'Capacitance', 'Magnetic Fields', 'Electromagnetic Induction', 'Alternating Currents', 'Quantum Physics', 'Nuclear Physics', 'Medical Physics'] },
      },
      chemistry: {
        '9': { cambridge_press: ['States of Matter', 'Atoms, Elements and Compounds', 'Stoichiometry', 'Electrochemistry', 'Chemical Energetics', 'Chemical Reactions', 'Acids and Bases', 'The Periodic Table', 'Metals', 'Atmosphere and Environment', 'Organic Chemistry'] },
        '10': { cambridge_press: ['The Particulate Nature of Matter', 'Experimental Techniques', 'Atoms, Elements and Compounds', 'Stoichiometry', 'Electricity and Chemistry', 'Chemical Energetics', 'Chemical Reactions', 'Acids, Bases and Salts', 'The Periodic Table', 'Metals', 'Air and Water', 'Organic Chemistry'] },
        '11': { cambridge_press: ['Atoms, Molecules and Stoichiometry', 'Atomic Structure', 'Chemical Bonding', 'States of Matter', 'Chemical Energetics', 'Electrochemistry', 'Equilibria', 'Reaction Kinetics', 'The Periodic Table', 'Group 2', 'Group 17', 'Nitrogen and Sulfur', 'Introduction to Organic Chemistry', 'Hydrocarbons', 'Halogen Derivatives', 'Hydroxy Compounds', 'Carbonyl Compounds'] },
        '12': { cambridge_press: ['Chemical Energetics', 'Electrochemistry', 'Equilibria', 'Reaction Kinetics', 'Group 2', 'Chemistry of Transition Elements', 'Nitrogen and Sulfur', 'Organic Chemistry - Analytical Techniques', 'Organic Chemistry - Carboxylic Acids', 'Organic Chemistry - Nitrogen Compounds', 'Polymerisation', 'Organic Synthesis'] },
      },
      biology: {
        '9': { cambridge_press: ['Cell Structure', 'Biological Molecules', 'Movement in and out of Cells', 'Enzymes', 'Plant Nutrition', 'Animal Nutrition', 'Transport in Plants', 'Transport in Animals', 'Gas Exchange', 'Respiration', 'Coordination and Response', 'Reproduction', 'Inheritance', 'Ecology', 'Human Influences on Ecosystems'] },
        '10': { cambridge_press: ['Cell Structure and Organisation', 'Diffusion and Osmosis', 'Enzymes', 'Plant and Animal Nutrition', 'Transportation', 'Respiration', 'Excretion', 'Coordination and Response', 'Reproduction', 'Inheritance', 'Organisms and their Environment'] },
        '11': { cambridge_press: ['Cell Structure', 'Biological Molecules', 'Enzymes', 'Cell Membranes and Transport', 'The Mitotic Cell Cycle', 'Nucleic Acids and Protein Synthesis', 'Transport in Plants', 'Transport in Mammals', 'Gas Exchange', 'Infectious Diseases', 'Immunity'] },
        '12': { cambridge_press: ['Energy and Respiration', 'Photosynthesis', 'Homeostasis', 'Coordination', 'Inherited Change', 'Selection and Evolution', 'Biodiversity, Classification and Conservation', 'Genetic Technology', 'Ecosystems'] },
      },
      global_perspectives: {
        '1': { cambridge_press: ['Ourselves', 'Our Community', 'Our World'] },
        '2': { cambridge_press: ['People and Communities', 'Environment', 'Citizenship'] },
        '3': { cambridge_press: ['Culture and Identity', 'Economic Development', 'Environmental Sustainability'] },
        '4': { cambridge_press: ['Human Rights', 'Conflict Resolution', 'Sustainability', 'Media and Communication'] },
        '5': { cambridge_press: ['Global Citizenship', 'Peace and Conflict', 'Technology and Innovation', 'Environmental Issues'] },
        '6': { cambridge_press: ['Demographic Change', 'Education for All', 'Employment', 'Sustainability', 'Trade and Aid'] },
        '7': { cambridge_press: ['Disease and Health', 'Human Rights', 'Migration', 'Poverty and Inequality', 'Sustainability'] },
        '8': { cambridge_press: ['Conflict and Peace', 'Law and Criminality', 'Media and Information', 'Sport and Recreation', 'Transport and Infrastructure'] },
      },
      ict: {
        '6': { cambridge_press: ['Computer Systems', 'Using the Internet', 'Word Processing', 'Spreadsheets', 'Presentations', 'Digital Graphics'] },
        '7': { cambridge_press: ['Data and Information', 'Advanced Word Processing', 'Spreadsheet Modelling', 'Database Design', 'Web Development', 'Digital Communication'] },
        '8': { cambridge_press: ['Networks', 'Advanced Spreadsheets', 'Database Management', 'Web Development', 'Programming Basics', 'Digital Video and Audio', 'Cyber Security'] },
      },
      computer_science: {
        '1': { cambridge_press: ['Using a Computer', 'Keyboard and Mouse Skills', 'Drawing Tools', 'Digital Stories', 'Safe Use of Technology'] },
        '2': { cambridge_press: ['Parts of a Computer', 'Typing and Text', 'Pictures and Shapes', 'Simple Coding Patterns', 'Online Safety'] },
        '3': { cambridge_press: ['Input and Output Devices', 'Files and Folders', 'Multimedia', 'Sequencing and Algorithms', 'Scratch Basics'] },
        '4': { cambridge_press: ['Computer Systems', 'Word Processing', 'Presentations', 'Programming with Blocks', 'Internet Research', 'Responsible Technology Use'] },
        '5': { cambridge_press: ['Data Handling', 'Spreadsheets', 'Animations and Games', 'Introduction to Coding', 'Networks', 'Digital Safety'] },
        '6': { cambridge_press: ['Computer Systems', 'Input and Output Devices', 'Digital Text and Media', 'Internet Safety', 'Algorithms', 'Visual Programming'] },
        '7': { cambridge_press: ['Data and Information', 'Binary and Data Representation', 'Programming Concepts', 'Spreadsheets', 'Web Design Basics', 'Digital Communication'] },
        '8': { cambridge_press: ['Networks', 'Databases', 'Programming Logic', 'Web Development', 'Cyber Security', 'Digital Content Creation'] },
        '9': { cambridge_press: ['Data Representation', 'Communication and Internet Technologies', 'Hardware', 'Software', 'Security', 'Ethics', 'Algorithm Design and Problem Solving', 'Programming', 'Databases'] },
        '10': { cambridge_press: ['Data Representation', 'Communication', 'Hardware and Software', 'Security and Ethics', 'Algorithm Design', 'Programming', 'Databases'] },
        '11': { cambridge_press: ['Information Representation', 'Communication', 'Hardware', 'Processor Fundamentals', 'System Software', 'Security, Privacy and Data Integrity', 'Ethics and Ownership', 'Databases', 'Algorithm Design', 'Data Types and Structures', 'Programming', 'Software Development'] },
        '12': { cambridge_press: ['Algorithms', 'Recursion', 'Data Structures', 'Software Engineering', 'Databases', 'Boolean Algebra', 'Processors', 'System Software', 'Communication', 'Security', 'Artificial Intelligence'] },
      },
      economics: {
        '9': { cambridge_press: ['The Basic Economic Problem', 'The Allocation of Resources', 'Microeconomic Decision Makers', 'Government and the Macroeconomy', 'Economic Development', 'International Trade and Globalisation'] },
        '10': { cambridge_press: ['The Basic Economic Problem', 'The Allocation of Resources', 'Microeconomic Decision Makers', 'Government and the Macroeconomy', 'Economic Development', 'International Trade and Globalisation'] },
        '11': { cambridge_press: ['Basic Economic Ideas and Resource Allocation', 'The Price System and the Microeconomy', 'Government Microeconomic Intervention', 'The Macroeconomy', 'Government Macroeconomic Intervention'] },
        '12': { cambridge_press: ['The Price System and the Microeconomy', 'Government Microeconomic Intervention', 'The Macroeconomy', 'Government Macroeconomic Intervention', 'International Economic Issues'] },
      },
    },
  },
};

export function getDefaultTopics(board: string, subject: string, grade: string): string[] {
  const boardTopics = curriculumData.topics[board];
  if (!boardTopics) return [];
  const subjectTopics = boardTopics[subject];
  if (!subjectTopics) return [];
  const gradeTopics = subjectTopics[grade];
  if (!gradeTopics) return [];
  const publishers = Object.keys(gradeTopics);
  return publishers.length > 0 ? gradeTopics[publishers[0]] : [];
}
