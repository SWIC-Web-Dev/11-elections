export default {
  districts: [
    {
      id: "D1",
      name: "Central District",
      precincts: [
        {
          id: 1,
          name: "Downtown",
          registeredVoters: 758,
          voterTurnout: 453,
          timeReported: "18:45",
          issues: ["printer-jam", "long-lines"],
          equipment: {
            machines: [
              { id: "M1", status: "active" },
              { id: "M2", status: "maintenance" },
            ],
            supplies: { ballots: 1000, pens: 100 },
          },
        },
        {
          id: 2,
          name: "University",
          registeredVoters: 1254,
          voterTurnout: 784,
          timeReported: "19:22",
          issues: ["ballot-shortage"],
          equipment: {
            machines: [
              { id: "M3", status: "active" },
              { id: "M4", status: "active" },
            ],
            supplies: { ballots: 800, pens: 150 },
          },
        },
      ],
    },
    {
      id: "D2",
      name: "Riverside District",
      precincts: [
        {
          id: 3,
          name: "Riverside",
          registeredVoters: 1458,
          voterTurnout: 695,
          timeReported: "18:15",
          issues: [],
          equipment: {
            machines: [
              { id: "M5", status: "active" },
              { id: "M6", status: "active" },
            ],
            supplies: { ballots: 1200, pens: 200 },
          },
        },
        {
          id: 4,
          name: "Suburban",
          registeredVoters: 2365,
          voterTurnout: 1542,
          timeReported: "19:45",
          issues: ["long-lines"],
          equipment: {
            machines: [
              { id: "M7", status: "maintenance" },
              { id: "M8", status: "active" },
            ],
            supplies: { ballots: 2000, pens: 300 },
          },
        },
      ],
    },
  ],
};
