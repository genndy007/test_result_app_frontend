export const projects = [
  {id: 1, name: "Central Database", description: "Main application of company", isActive: true},
  {id: 2, name: "Affiliate Management Portal", description: "Secondary for influencers", isActive: false},
  {id: 3, name: "Supplier Order App", description: "Secondary for suppliers", isActive: false},
]

export const pages = [
  {name: 'Projects', path: '/projects'},
  {name: 'Test Cases', path: '/test_cases'},
  {name: 'Test Suites', path: '/test_suites'},
  {name: 'Test Runs', path: '/test_runs'},
]

export const settings = [
  {name: 'Settings', path: '/settings'},
  {name: 'Log Out', path: '/login'},
]

export const testCases = [
  {
    id: 1,
    name: "Creating New Item",
    description: "Need to create some item detail",
    precondition: "User is logged in",
    postcondition: "Item is created",
    testSteps: [
      {content: "Step 1 C content", order: 1},
      {content: "Step 2 C content", order: 2},
      {content: "Step 3 C content", order: 3},
    ]
  },
  {
    id: 2,
    name: "Reading New Item",
    description: "Need to Reading some item detail",
    precondition: "User is logged in",
    postcondition: "Item is read",
    testSteps: [
      {content: "Step 1 R content", order: 1},
      {content: "Step 2 R content", order: 2},
      {content: "Step 3 R content", order: 3},
    ]
  },
  {
    id: 3,
    name: "Updating New Item",
    description: "Need to Updating some item detail",
    precondition: "User is logged in",
    postcondition: "Item is Updated",
    testSteps: [
      {content: "Step 1 U content", order: 1},
      {content: "Step 2 U content", order: 2},
      {content: "Step 3 U content", order: 3},
    ]
  },
]