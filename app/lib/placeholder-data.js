
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-${month}-${day}`;
// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
  {
    id: '252344b2-4001-2325-9855-fec4b6a6442a',
    name: 'Admin',
    email: 'admin@valleylandscape.ca',
    password: '123456',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const categories = [
  {
    id:'0ae1bc72-be54-4474-b7f4-6e23b67b2ad4',
    title: "yellow",
    description: 'category yellow',
    created_at: currentDate,
    updated_at: currentDate
  },{
    id:'be396495-e94c-4814-b7ce-6b9ee55344c7',
    title: "orange",
    description: 'category orange',
    created_at: currentDate,
    updated_at: currentDate
  },{
    id:'f9b53179-9c01-4107-a4d0-69fadeb4ed3a',
    title: "blue",
    description: 'category blue',
    created_at: currentDate,
    updated_at: currentDate
  },{
    id:'1468510f-1c2b-4016-bf3f-fb470dc3927b',
    title: "red",
    description: 'category red',
    created_at: currentDate,
    updated_at: currentDate
  },{
    id:'5658d8e3-6961-4e57-b9db-09e020c6cbf6',
    title: "purple",
    description: 'category purple',
    created_at: currentDate,
    updated_at: currentDate
  },{
    id:'2643279f-3bf6-498b-b07d-15d7df4ccd32',
    title: "green",
    description: 'category green',
    created_at: currentDate,
    updated_at: currentDate
  },{
    id:'30bf063e-e90a-40c6-afac-1a71385f77b1',
    title: "weeds",
    description: 'category weeds',
    created_at: currentDate,
    updated_at: currentDate
  },
];

const cardPriority = [
  { description: 'low', level: "1" },
  { description: 'mid', level: "2" },
  { description: 'high', level: "3" }
];

const cards = [
  {
    category_id: categories[0].id,
    title: "Winter Daily Checks",
    description_front: "Start Up\n1. Run Webasto heaters for 15-30min before starting trucks/equipment.\n- May need to run longer in colder conditions.		\n2. Check fluid levels.		\n3. Start trucks & let run for 30mins.		\n4. Submit vehicle checklist form on ProCore.		\n5. Top up with fuel, if needed.		\nShut Down		\nDump Trucks		\nMain power shut off switch is turned off.		\nLoaders		\nMain power shut off switch is turned off.		\nSafety Lock-out  Switch turned on.		\nSkid Steers		\nMain Power Shut Off Switch is turned off once the DEF Purge light		\nhas turned off.		\nPeterbilt 220		\nMain power shut off switch is turned off.",
    description_back:"",
    revision: "2",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].level
  },
  {
    category_id: categories[0].id,
    title: "End of Day Shop Checks",
    description: 'Checklist	\n1. Are all the doors locked?	\n2. Are the blankets infront of the back door?	\n3. Is the Air Compressor turned off?	\n4. Is the Water Pump turned off?	\n5. If you used a piece of equipment: 	\n -Did you complete Shut Down procedures?	\n -Did you put back the keys?	\n5. Is the main door locked?'    ,
    revision: "2",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].level
  },
  {
    category_id: categories[0].id,
    title: "Meetings",
    description: "Morning Meeting\n- Review daily plan.\n- What needs to be done specifically today? (Give numbers & quantities)\n- When does it need to be done by?\n- What are the hazards of the day?\n- Are we on schedule?\n- Do we have the appropriate tools/PPE?\n- Has the full-kit been reviewed?\n- Hand out cards/deligate tasks.\n\n\nAfter Lunch Meeting\n- Are we on schedule?\n- How can we speed things up?\n- What else can be done if we are ahead of schedule?\n- Is there any new obstacles or have plans changed?\n- Was it caused by a 3rd party or our company?\n\n\nEnd of Day Meeting\n- What did or did not get done?\n- Are we on schedule?\n- What is happening tomorrow?\n- What time are we starting?\n- What do we need?\n     - People/Tools/Equipmet/etc.\n- Has all documentation been sent in?\n- Counts for trees/shrubs been completed?",
    revision: "4",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].level
  },
  {
    category_id: categories[0].id,
    title: "Snow Removal - Sidewalks",
    description: "\nSidewalks\n1. Clock into yard for unloading/loading equipment.\n2. Complete physical & digital vehicle/equipment inspection forms.\n3. Complete a daily hazard on SiteMax & have a Daily Meeting.\n4. Fill out a physical & a digital form for sidewalks at the yard.\n5. Once ready to leave, clock into travel time to your next site.\n6. Once at site, clock into snow removal- sidewalks.\n7. Take BEFORE pictures of the site, including the parking lots, & attach them to the digital form.\n8. Clear the sidewalks & spread ice melt.\n     - Put down rock if needed on any icey areas.\n9. Take AFTER pictures once the site is completed, & attach them to the digital form.\n10. Complete a digital snow form for each site & update physical form.\n11. Continue steps 5-10 for each site.\n12. At the end of the night clean off truck & equipment at the car wash.\n13. Once back at the yard, clock back into unloading/loading equipment.\n     - Re-load the truck so its ready for next time.\n14. Complete digital form at the yard & attach picture of physical form.\n\nNotes\n- Drive with caution, keep a 6 second space between vehicles.\n- Never put gloves on dash of the trucks.\n- Knock off your boots before getting into the trucks.\n\nSiteMax\n1. Select the site on the main screen.\n2. Select the plus button at the bottom of the screen.\n3. Select Site Reports or Safety Reports.\n4. Select the Form you want to fill out.\n5. Fill out the form and SAVE it.\n6. To edit the form, go back to the site page and all the completed forms\n      will be at the bottom.",
    revision: "3",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].level
  },
  {
    category_id: categories[0].id,
    title: "Snow Removal - Sidewalks",
    description: "\nClearing\n1. Clock into yard for unloading/loading equipment.\n2. Complete physical & digital vehicle/equipment inspection forms.\n3. Complete a daily hazard on SiteMax & have a Daily Meeting.\n4. Fill out a digital & a physical form for Clearing at the yard.\n5. Load trailer, making sure equipment & attachments are secure.\n     - Leaving equipment running in colder weather.\n6. Once ready to leave, clock into travel time to your next site.\n7. Once at site, clock into snow removal- clearing\n8. Take BEFORE pictures of the site & attach them to the digital form.\n9. Clear parking lots.\n     - Switch attachments to clean parking stalls & between vehicles.\n10. Take AFTER pictures once the site is completed & of the snow piles.\n     - Attach them to the digital form.\n11. Complete digital snow form for each site & update physical form.\n12. Continue steps 5-11 for each site.\n13. At the end of the night, clean off truck & equipment at the car wash.\n14. Once back at the yard, clock back into unloading/loading equipment.\n     - Clean out snow & ice from inside tracks.\n     - Top up with fuel & park it inside the shop.\n15. Complete digital form at the yard & attach picture of physical form.\n\nNotes\n- Drive with caution, keep a 6 second space between vehicles.\n- Never put gloves on dash of the trucks.\n- Knock off your boots before getting into the trucks.\n\nSiteMax\n1. Select the site in the main screen.\n2. Select the plus button at the bottom of the screen.\n3. Select Site Reports or Safety Reports.\n4. Select the Form you want to fill out.\n5. Fill out the form and SAVE it.\n6. To edit the form, go back to the site page and all the completed forms will be at the bottom.",
    revision: "3",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].level
  },
  {
    category_id: categories[0].id,
    title: "Snow Removal - Sanding/Liquid",
    description: "\nSanding/Liquid\n1. Clock into yard for unloading/loading equipment.\n2. Complete physical & digital vehicle/equipment inspection forms.\n3. Complete a daily hazard on SiteMax & have a Daily Meeting.\n4. Fill out a physical & a digital form for Sanding/Liquid at the yard.\n5. Load truck with rock/liquid, and test if equipment is working correctly.\n     - Do not leave the yard without testing the equipment.\n6. Once ready to leave, clock into travel time to your next site.\n7. Once at site, clock into snow removal- sanding/liquid.\n8. Take BEFORE pictures of the site & attach them to the digital form.\n9. Put down the rock/liquid in the parking lot.\n     - Keep track of your kms or amount of liquid put down.\n10. Take AFTER pictures once the site is completed, & attach them to the digital form.\n11. Complete digital snow form for each site & update physical form.\n12. Continue steps 5-11 for each site.\n13. At the end of the night, clean off truck & equipment at the car wash.\n14. Once back at the yard, clock back into unloading/loading equipment.\n     - Unload any extra rock or liquid & top it up with fuel.\n     - Plug the truck in.\n15. Complete digital form at the yard & attach picture of physical form.\n\nNotes\n- Drive with caution, keep a 6 second space between vehicles.\n- Never put gloves on dash of the trucks.\n- Knock off your boots before getting into the trucks.\n\nSiteMax\n1. Select the site in the main screen.\n2. Select the plus button at the bottom of the screen.\n3. Select Site Reports or Safety Reports.\n4. Select the Form you want to fill out.\n5. Fill out the form and SAVE it.\n6. To edit the form, go back to the site page and all the completed forms will be at the bottom.",
    revision: "3",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].level
  },
  {
    category_id: categories[0].id,
    title: "Snow Removal - Sanding/Liquid",
    description: "",
    revision: "3",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].level
  }
]


const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];




module.exports = {
  users,
  customers,
  invoices,
  revenue,
  categories,
  cardPriority,
  cards
};