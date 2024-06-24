
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
    description_front: "\nStart Up		\n1. Run Webasto heaters for 15-30min before starting trucks/equipment.		\n     - May need to run longer in colder conditions.		\n2. Check fluid levels.		\n3. Start trucks & let run for 30mins.		\n4. Submit vehicle checklist form on ProCore.		\n5. Top up with fuel, if needed.		\n		\nShut Down		\nDump Trucks		\nMain power shut off switch is turned off.		\nLoaders		\nMain power shut off switch is turned off.		\nSafety Lock-out  Switch turned on.		\nSkid Steers		\nMain Power Shut Off Switch is turned off once the DEF Purge light		\nhas turned off.		\nPeterbilt 220		\nMain power shut off switch is turned off.",
    description_back:"",
    revision: "2",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  }, {
    category_id: categories[0].id,
    title: "End of Day Shop Checks",
    description_front:"\nChecklist	\n1. Are all the doors locked?	\n2. Are the blankets infront of the back door?	\n3. Is the Air Compressor turned off?	\n4. Is the Water Pump turned off?	\n5. If you used a piece of equipment: 	\n       -Did you complete Shut Down procedures?\n       -Did you put back the keys?	\n5. Is the main door locked?	",
    description_back:"",
    revision: "2",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[0].id,
    title: "Meetings",
    description_front:"\nMorning Meeting	\n- Review daily plan.	\n- What needs to be done specifically today? (Give numbers & quantities)	\n- When does it need to be done by?	\n- What are the hazards of the day?	\n- Are we on schedule?	\n- Do we have the appropriate tools/PPE?	\n- Has the full-kit been reviewed?	\n        - Hand out cards/deligate tasks.	\n	\nAfter Lunch Meeting	\n- Are we on schedule?	\n- How can we speed things up?	\n- What else can be done if we are ahead of schedule?	\n- Is there any new obstacles or have plans changed?	\n     - Was it caused by a 3rd party or our company?	\n	\nEnd of Day Meeting	\n- What did or did not get done?	\n- Are we on schedule?	\n- What is happening tomorrow?	\n- What time are we starting?	\n- What do we need?	\n     - People/Tools/Equipmet/etc..	\n- Has all documentation been sent in?	\n- Counts for trees/shrubs been completed?	",
    description_back:"",
    revision: "4",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[0].id,
    title: "Snow Removal - Sidewalks",
    description_front:"\nSidewalks\n1. Clock into yard for unloading/loading equipment.\n2. Complete physical & digital vehicle/equipment inspection forms.\n3. Complete a daily hazard on SiteMax & have a Daily Meeting.\n4. Fill out a physical & a digital form for sidewalks at the yard.\n5. Once ready to leave, clock into travel time to your next site.\n6. Once at site, clock into snow removal- sidewalks.\n7. Take BEFORE pictures of the site, including the parking lots, & attach them to the digital form.\n8. Clear the sidewalks & spread ice melt.\n     - Put down rock if needed on any icey areas.\n9. Take AFTER pictures once the site is completed, & attach them to the digital form.\n10. Complete a digital snow form for each site & update physical form.\n11. Continue steps 5-10 for each site.\n12. At the end of the night clean off truck & equipment at the car wash.\n13. Once back at the yard, clock back into unloading/loading equipment.\n     - Re-load the truck so its ready for next time.\n14. Complete digital form at the yard & attach picture of physical form.\n\nNotes\n- Drive with caution, keep a 6 second space between vehicles.\n- Never put gloves on dash of the trucks.\n- Knock off your boots before getting into the trucks.",
    description_back:"\nSiteMax\n1. Select the site on the main screen.\n2. Select the plus button at the bottom of the screen.\n3. Select Site Reports or Safety Reports.\n4. Select the Form you want to fill out.\n5. Fill out the form and SAVE it.\n6. To edit the form, go back to the site page and all the completed forms will be at the bottom.",
    revision: "3",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[0].id,
    title: "Snow Removal - Clearing",
    description_front:"\nClearing\n1. Clock into yard for unloading/loading equipment.\n2. Complete physical & digital vehicle/equipment inspection forms.\n3. Complete a daily hazard on SiteMax & have a Daily Meeting.\n4. Fill out a digital & a physical form for Clearing at the yard.\n5. Load trailer, making sure equipment & attachments are secure.\n     - Leaving equipment running in colder weather.\n6. Once ready to leave, clock into travel time to your next site.\n7. Once at site, clock into snow removal- clearing\n8. Take BEFORE pictures of the site & attach them to the digital form.\n9. Clear parking lots.\n     - Switch attachments to clean parking stalls & between vehicles.\n10. Take AFTER pictures once the site is completed & of the snow piles.\n     - Attach them to the digital form.\n11. Complete digital snow form for each site & update physical form.\n12. Continue steps 5-11 for each site.\n13. At the end of the night, clean off truck & equipment at the car wash.\n14. Once back at the yard, clock back into unloading/loading equipment.\n     - Clean out snow & ice from inside tracks.\n     - Top up with fuel & park it inside the shop.\n15. Complete digital form at the yard & attach picture of physical form.\n\nNotes\n- Drive with caution, keep a 6 second space between vehicles.\n- Never put gloves on dash of the trucks.\n- Knock off your boots before getting into the trucks.",
    description_back:"\nSiteMax\n1. Select the site in the main screen.\n2. Select the plus button at the bottom of the screen.\n3. Select Site Reports or Safety Reports.\n4. Select the Form you want to fill out.\n5. Fill out the form and SAVE it.\n6. To edit the form, go back to the site page and all the completed forms will be at the bottom.",
    revision: "3",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[0].id,
    title: "Snow Removal - Sanding/Liquid",
    description_front:"\nSanding/Liquid\n1. Clock into yard for unloading/loading equipment.\n2. Complete physical & digital vehicle/equipment inspection forms.\n3. Complete a daily hazard on SiteMax & have a Daily Meeting.\n4. Fill out a physical & a digital form for Sanding/Liquid at the yard.\n5. Load truck with rock/liquid, and test if equipment is working correctly.\n     - Do not leave the yard without testing the equipment.\n6. Once ready to leave, clock into travel time to your next site.\n7. Once at site, clock into snow removal- sanding/liquid.\n8. Take BEFORE pictures of the site & attach them to the digital form.\n9. Put down the rock/liquid in the parking lot.\n     - Keep track of your kms or amount of liquid put down.\n10. Take AFTER pictures once the site is completed, & attach them to the digital form.\n11. Complete digital snow form for each site & update physical form.\n12. Continue steps 5-11 for each site.\n13. At the end of the night, clean off truck & equipment at the car wash.\n14. Once back at the yard, clock back into unloading/loading equipment.\n     - Unload any extra rock or liquid & top it up with fuel.\n     - Plug the truck in.\n15. Complete digital form at the yard & attach picture of physical form.\n\nNotes\n- Drive with caution, keep a 6 second space between vehicles.\n- Never put gloves on dash of the trucks.\n- Knock off your boots before getting into the trucks.",
    description_back:"\nSiteMax\n1. Select the site in the main screen.\n2. Select the plus button at the bottom of the screen.\n3. Select Site Reports or Safety Reports.\n4. Select the Form you want to fill out.\n5. Fill out the form and SAVE it.\n6. To edit the form, go back to the site page and all the completed forms will be at the bottom.",
    revision: "3",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[0].id,
    title: "Snow Removal - Inspections",
    description_front:"\nInspections\n1. Clock in for inspections at the yard.\n     - If starting at site, clock in once you are at your first site.\n2. Complete physical & digital vehicle inspection forms.\n     - Do not need to complete this if using own vehicle.\n3. Complete a daily hazard on SiteMax.\n4. Fill out a physical form & an digital inspection form for the yard.\n5. Once ready to leave, clock into travel time to your next site.\n6. Once at site, clock into snow removal - inspections.\n7. Inspect site for hazards: ice build up, blowing snow, etc..\n     - Measure the depth of the snow in the parking lots, if possible.\n8. Take pictures of any hazards or the general state of the site, and attach to the digital form.\n     - Write detailed notes about where/what the hazards are.\n9. Update physical form & fill out a digital inspection form.\n10. Once complete, clock into travel time to your next site.\n11. Continue steps 5-10 for each site.\n12. If going back to the yard, top up truck with fuel & plug it in.\n13. Complete digital form & attach picture of physcical form.\n     - If sanding/salting/clearing is needed, contact the person in charge & \nlet them know what is needed to be done at each site.\n\nNotes\n- Drive with caution, keep a 6 second space between vehicles.\n- Never put gloves on dash of the trucks.\n- Knock off your boots before getting into the trucks.",
    description_back:"\nProcedures\nWeather apps do not always represent what happens around the city.\n- If workers notice a weather anomaly when not at work, they are to send a group text to let other co-workers know.\n- The worker on schedule that weekend for inspections would then need to go out & check sites.\n- All sites must be checked.\n- One person will be on call each weekend to do inspections, if needed.",
    revision: "3",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[0].id,
    title: "Site Manager",
    description_front:"\nStart Of Day\n- Clock in workers & sign into site.\n- Complete Equipment/Vehicle Inspections & Daily Hazards\n- Conduct morning meeting and go over hazards of the site.\n- Assign tasks ( See specific task cards)\n\nDuring The Day\n- Communicate with other contractors on site.\n- Make sure workers have the correct tools/PPE for the job.\n- Conduct mid-day meeting after lunch.\n\nEnd of Day\n- Tools are put away & trailer is organized.\n- Equipment is clean & free of debris or garbage.\n- Trailer & equipment are locked.\n- Quick site walk through.\n- Supplies & workers are coordinated for the next day.\n- End of day meeting.\n- Clock workers out.\n- All forms are sent in & end of day report is completed.\n- Speak with supervisor.\n- Update schedual.\n     - Weekly.\n     - 3 week look ahead.\n- Cleaned out truck of any unneeded tool/materials.",
    description_back:"]\nOther Tasks\n - Train workers on new equipment or tools if needed.\n - Complete monthy toolbox meetings.\n - Fill out near miss or insident reports.\n - Complete pre-job site inspections.\n - Coordinate with the water truck.\n - Quanity check of trees & shrubs.\n - Take pictures of job  before, during & after.",
    revision: "3",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[0].id,
    title: "Snow Removal - Hauling Snow",
    description_front:"\nSanding/Liquid\n1. Clock into yard for unloading/loading equipment.\n2. Complete physical & digital vehicle/equipment inspection forms.\n3. Complete a daily hazard on SiteMax & have a Daily Meeting.\n4. Fill out a physical & digital form for Hauling at the yard.\n5. Test if truck dump box is working correctly.\n     - Do not leave the yard without testing the equipment.\n6. Once ready to leave, clock into travel time to your next site.\n7. Once at site, clock into snow removal- Loading/Hauling Snow.\n8. Communicate with loader operator & determine how you will be loaded.\n9. Once loaded, drive to dump site & dump the snow.\n     - Record on the form: What site & time you got loaded.\n                                                   : What site & time you dumped at.\n                                                   : How many yards.\n10. Once a site is complete, clock into travel time to the next site. \n11. Continue steps 7-10 for each site.\n12. At end of the night clock into travel time back to the yard.\n13. Complete shut down procedures for the truck & plug it in.\n      - Hang up the keys.\n15. Complete digital form & attach picture of physical form.\n\nNotes\n- Drive with caution, keep a 6 second space between vehicles.\n- Never put gloves on dash of the trucks.\n- Knock off your boots before getting into the trucks.",
    description_back:"\nSiteMax\n1. Select the site in the main screen.\n2. Select the plus button at the bottom of the screen.\n3. Select Site Reports or Safety Reports.\n4. Select the Form you want to fill out.\n5. Fill out the form and SAVE it.\n6. To edit the form, go back to the site page and all the completed forms will be at the bottom.",
    revision: "3",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[0].id,
    title: "Snow Removal - Loading Snow",
    description_front:"\nSanding/Liquid\n1. Clock into yard for unloading/loading equipment.\n2. Complete physical & digital vehicle/equipment inspection forms.\n3. Complete a daily hazard on SiteMax & have a Daily Meeting.\n4. Fill out a physical & digital form for Loading snow at the yard.\n5. Load trailer, making sure equipment & attachments are secure.\n     - Leaving equipment running in colder weather.\n6. Once ready to leave, clock into travel time to your next site.\n7. Once at site, clock into snow removal- Loading/Hauling Snow.\n8. Communicate with truck drivers & determine how you will be loading.\n8. Take BEFORE pictures of the snow piles & attach them to the digital form.\n9. Load the trucks.\n10. Take AFTER pictures of the now empty lot & attach to the digital form.\n11. Complete digitial form for each site & update physical form.\n11. Continue steps 5-11 for each site.\n12. At end of the night clock into travel time back to the yard.\n14. Once back at the yard, clock back into unloading/loading equipment.\n     - Unload the equipment & top it up with fuel.\n     - Clean out snow & ice from inside tracks.\n     - Park it inside the shop.\n15. Complete digital forms & attach picture of physical form.\n\nNotes\n- Drive with caution, keep a 6 second space between vehicles.\n- Never put gloves on dash of the trucks.\n- Knock off your boots before getting into the trucks.",
    description_back:"\nSiteMax\n1. Select the site in the main screen.\n2. Select the plus button at the bottom of the screen.\n3. Select Site Reports or Safety Reports.\n4. Select the Form you want to fill out.\n5. Fill out the form and SAVE it.\n6. To edit the form, go back to the site page and all the completed forms will be at the bottom.",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[0].id,
    title: "Snow Removal - Requests",
    description_front:"\nSidewalks\n1. Clock into yard for unloading/loading equipment.\n2. Complete physical & digital vehicle/equipment inspection forms.\n3. Complete a daily hazard on SiteMax & have a Daily Meeting.\n4. Fill out a physical & a digital form for sidewalks at the yard.\n5. Once ready to leave, clock into travel time to your next site.\n6. Once at site, clock into snow removal- sidewalks.\n7. Text/Call the office & let them know you are starting the service request.\n8. Take BEFORE pictures of the site, including the parking lots, & attach them to the digital form.\n9. Complete the service request.\n10. Take AFTER pictures once the site is completed, & attach them to the digital form.\n10. Complete SiteMax snow form for the site & update paper form.\n11. Text/Call the office to let them know they can close out the request.\n12. At the end of the night clean off truck & equipment at the car wash.\n13. Once back at the yard, clock back into unloading/loading equipment.\n     - Re-load the truck so its ready for next time.\n14. Complete digital form at the yard & attach picture of physical form.\n\nNotes\n- Drive with caution, keep a 6 second space between vehicles.\n- Never put gloves on dash of the trucks.\n- Knock off your boots before getting into the trucks.",
    description_back:"\nSiteMax\n1. Select the site in the main screen.\n2. Select the plus button at the bottom of the screen.\n3. Select Site Reports or Safety Reports.\n4. Select the Form you want to fill out.\n5. Fill out the form and SAVE it.\n6. To edit the form go back to the site page and all the completed forms will be at the bottom",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[0].id,
    title: "Summer Site Inspections",
    description_front:"\nInspections\n1. Clock in to Equipment/Vehicle Inspections at the yard.\n     - If starting at site, clock into site inspections once at your first site. + Skip to #4\n2. Complete vehicle inspection forms.\n     - Do not need to complete this if using own vehicle.\n3. Complete a daily hazard or add it to that days daily hazard.\n4. Clock into travel time for the site.\n5. Once at the site clock into site insepctions.\n4. Fill out an inspection form, stating any deficencies & damage.\n     - Take pictures of an cracks, chips in concrete\n     - Damage to building or site.\n     - Deficencies such as incorrect subgrade.\n     - Take notes of major issues.\n5. Complete the form & update forman/supervisor of any issues that will affect the site start up.\n\nNotes\n- Knock off your boots before getting into the trucks if site is muddy.\n- Create markups on drawings if needed.",
    description_back:"\nSiteMax\n1. Select the site in the main screen.\n2. Select the plus button at the bottom of the screen.\n3. Select Site Reports or Safety Reports.\n4. Select the Form you want to fill out.\n5. Fill out the form and SAVE it.\n6. To edit the form go back to the site page and all the completed forms will be at the bottom",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[0].id,
    title: "Steps To Take In Emergency",
    description_front:"\nProcdure\n1. Tell employees to stop work immediately and assess the situation.\n2. Ensure the safety of everyone involved\n3. If there are injuries, provide first aid as necessary.\n      - If the accident involves equipment or vehicles, immediately shut them down to prevent further harm.\n   - Notify senior management about the accident.\n   - Depending on the severity, contact emergency medical services.\n          - Provide them with accurate information of the incident.\n   - Secure the accident scene to prevent further injuries or damage.\n   - If there are hazards such as spills, contain them to prevent environmental damage.\n   - Collect relevant information about the accident.\n   - Take photographs of the scene if it is safe to do so.\n   - Conduct a thorough investigation into the accident.\n   - Determine the root cause of the accident.\n   - Document all findings from the investigation in a incident report on SiteMax.",
    description_back:"",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[1].id,
    title: "Bandit 15XP Chipper",
    description_front:"\nStart Up\n1. Open infeed pan & lock into place\n2. Adjust discharge shoot & chip deflector.\n3. Check all fluids.\n4. Turn the key to the on postion & let it pre-heat.\n5. Start machine\n6. Engage the clutch:\n     - Slowly pull down the handle until the belts start turning\n     - When you hear the engine lug, bump the handle until belts \nstart fully turning with the speed of the engine.\n     - Once this occurs lower the handle to resting position (Horizontal).\n     - Let it run for 3-5mins before starting work.\n7. Increase the throttle to full RPM.\n     - Flip the switch UP for full RPM\n8. Engage the feed wheel by pulling the control bar towards you.\n9. Start Chipping\n\nShut Down\n1. Make sure everything has been chipped & gone through the drum.\n2. Turn the chipper to idle.\n     - Flip the swith DOWN for idle.\n3. Disengage the clutch by putting it into neutral position. (Vertical).\n4. Turn off the machine\n5. Empty the bottom clean-out door.",
    description_back:"\n  Notes\n- Always have 2 workers using the bandit at all times.\n- Never reach into the hopper area or drum.\n- Insure you are wearing the correct PPE for the job.\n- Never feed any material that might contain wire, stones, or other foreign objects.\n- Never idle the machine for a long period of time with the cltuch disengaged.\n- One operator must always be in reach of the feed control devices.\n- Always empty out the bottom clean-out pan after every use.",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[1].id,
    title: "Loader Operator",
    description_front:"\nChecklist\n- Review full-kit.\n- Do you have enough fuel for the day?\n- Spill kit & tray on site.\n- Do you understand the task for the day?\n\nStart Up\n- Check/clean out air filters.\n- Check engine belt\n- Check engine oil level.\n- Check fuel/water seperator\n- Check hydraulic oil level.\n- Grease/ lubricate bearings/fittings\n- Check coolant level.\n- Check tire pressure.\n- Check transmission oil level.\n- Fill out equipment inspection form.\n\nProcedures\n- Loads truck on even/level ground only.\n- Be square to the truck when loading.\n- Carry your load low to the ground until you are ready to dump.\n- Make sure park brake is engaged before dismounting loader.\n- Do not let truck drivers mount the loader to give payment/forms.\n- Know your blind spots & limitations.\n- Be cautious when working around the screener & conveyors.\n- Use signal lights when driving on main roads & obay the laws.",
    description_back:"\nShut Down\n- Place bucket level on the ground.\n- Put machine in neutral & engage the park brake.\n- Clean out machine of garbage or excesive dirt.\n- Idle down before shutting off machine.\n- Switch off anti-theft & main shut off.\n- Shut any windows & lock all doors.\n- Send in any forms or reciepts.\n\nFull Kit\nAction Packer\nBucket\nForks",
    revision: "2",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[1].id,
    title: "Skid Steer Operator",
    description_front:"\nChecklist\n- Review full-kit.\n- Do you have enough fuel for the day?\n- Spill kit & tray on site.\n- Do you understand your task for the day?\n\nStart Up\n- Check/clean out air filters.\n- Check fuel filter.\n- Check engine oil level.\n- Grease fittings & quick attach pins.\n- Check hydraulic oil level.\n- Check tire pressure or track rightness.\n- Check coolant level.\n- Check tracks for damage.\n- Fill out equipment inspection form.\n\nProcedures\n- Loads truck on level ground only.\n- Be square to the truck/wheelbarrow when loading.\n- Carry your load low to the ground until you are ready to dump.\n- Know your blind spots & limitations.\n- Be cautious when working around the screener & conveyors.\n- Use spotters when working near buildings or other objects.\n- Use beacon lights when driving on main roads & obay the laws.\n     - Have a pilot truck/spotters if needed.\n- Never allow workers to ride on machine or attachments.\n- Do not turn sharply, make mutiple point turns.",
    description_back:"\nShut Down\n- Place bucket level on the ground.\n- Clean out machine of garbage or excesive dirt.\n- Lock all doors.\n- Send in any end of day forms.\n- Make sure to shut any windows.\n\nFull Kit\nAction Packer\nSmooth Bucket\nToothed Bucket\nForks\nTree Arms",
    revision: "2",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[1].id,
    title: "Excavator Operator",
    description_front:"\nChecklist\n- Review full-kit.\n- Do you have enough fuel for the day?\n- Spill kit & tray on site.\n- Do you understand your task for the day?\n\nStart Up\n- Check/clean out air filters.       - Check fuel filter.\n- Check engine oil level.               - Grease fittings.\n- Check hydraulic oil level.           - Check track tightness.\n- Check coolant level.                   - Fill out equipment inspection form.\n- Check tightness of nuts on boom & bucket area.\n\nProcedures\n- Loads truck on level ground only.\n- Make sure loactes have been comepleted & understood.\n- Know your blind spots & limitations.\n- Use spotters when working near buildings or other objects.\n- Never allow workers to ride on machine or attachments.\n- Do not extend the boom to far with a full bucket.\n- Always dig with your idler wheel in front, never dig with yours procket wheel, as it will wear down bushings & pins.\n- This is the same when traveling across site.",
    description_back:"\nShut Down\n- Place bucket level on the ground.\n- Make sure to shut all the windows.\n- Clean out machine of garbage or excesive dirt.\n- Idle down before shutting off machine.\n- Switch off the main shut off (If it has one)\n- Lock all doors.\n- Send in any forms or reciepts.\n\nFull Kit\nAction Packer\nSmall/Large Bucket\nQuick Attach Wrench",
    revision: "2",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[1].id,
    title: "Doppstadt Operator",
    description_front:"\nChecklist\n- Review full-kit.\n- Do you have enough fuel for the day?\n- Spill kit & tray on site.\n\nStart Up\n- Keep engine bay clean.\n- Clean dust discharge valves.\n- Check engine oil level.\n- Grease fittings.\n- Check hydraulic oil level.\n- Check hydraulic lines & fittings.\n- Check coolant level.\n- Clean main cartridge filter\n- Clean running faces of belts.\n- Check scrapers for wear & damage.\n- Clean running faces of belts & check tension.\n- Clean the screening compartment & Check drum-guide roller for wear.\n\nProcedures\nStart engine.\n\n- Load hopper on level ground",
    description_back:"\nShut Down\n- Be aware of conveyors & hoppers when cleaning underneath.\n- Know your blind spots & limitations.\n- Do not clean out machine when the engine is running.",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[1].id,
    title: "Safe Dumping Practices",
    description_front:"\n  Checklist\n- Vehicle inspections & daily hazards have been completed & sent in.\n- Equipment is in good working condition.\n- Walk around complete.\n- Load is evenly distributed before travel.\n\nProcedure\n1. Dumping area has been confirmed & understood.\n2. Open Tarp.\n3. Turn on PTO.\n4. Empty rear axle bags & open tailgate pins.\n5. Put truck in drive.\n6. Raise the box.\n7.Drive forward slowly while load is dumping.\n     - If needed, stop truck and vibrate box to make sure it is empty. \n8. Lower the box & lock tailgate pins.\n9.Turn off the PTO.\n10. Refill rear axle bags.\n11. Complete steps again for next dump.\n\nNotes\n- Never drive with the box up.\n- Always remain in the truck when dumping.\n- Never attempt to jump from the truck if it starts to tip over.\n- Never put truck in reverse while the PTO is on.\n- Do not accelerate vehicle while the PTO is on.",
    description_back:"",
    revision: "5",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[1].id,
    title: "Bikes/ Trikes",
    description_front:"\nChecklist\n- Insepction has been completed & send it.\n- Equipment is in good working condition.\n- If towing a cart, everything is sercure & ready for travel.\n- You have a correct size of bike helmet.\n- Follow all traffic rules & stay aware of pedestrians.\n\nProcedure\n1. Adjust the seat to the correct height.\n2. Sit on the bike & flip up the kick stand.\n3. Press and hold the power button.\n4. Start pedaling or use the throttle gently to start moving.\n5. Travel to your desination, staying aware & balanced.\n    - Slow down on turns or uneven terrain.\n6. Once at desination stop the bike & put down the kick stand.\n7. Lock the bike if needed.\n\nNotes\n- Stay on designated paths.\n- Maintain a safe speed to conditions.\n- Do not turn too sharp.\n- All tires must remain on the ground at all times.\n- Keep safe distance from pedestrians, vehicles, train, etc..\n- Do not ride to long in the rain.\n     + If it starts to rain, clean up & start heading back to OMF.",
    description_back:"\nCloseout- What does complete look like?\n- Bikes are put away neatly & clean.\n- Batteries are put on the charger for the next day.\n- Helmets are put away.\n- Seacan is locked.\n- All forms have been completed & sent in.",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[1].id,
    title: "DOZER",
    description_front:"\nChecklist\n- Review full-kit.\n- Do you have enough fuel for the day?\n- Spill kit & tray on site.\n- Do you understand your task for the day?\n\nStart Up\n- Check/clean out air filters.        - Check fuel filter.\n- Check engine oil level.                - Grease fittings.\n- Check hydraulic oil level.            - Check track tightness.\n- Check coolant level.                    - Check tracks for damage.\n- Fill out equipment inspection form.\n\nProcedures\n- Know your blind spots & limitations.\n- Be cautious when working around the screener & conveyors.\n- Use spotters when working near buildings or other objects.\n- Never allow workers to ride on machine or attachments.\n- Do not turn sharply, make mutiple point turns.\n- Make sure gps attachment are secure & kept clean.",
    description_back:"\n  Shut Down\n- Place blade & ripped tooth level on the ground.\n- Make sure to shut all the windows.\n- Clean out machine of garbage or excesive dirt.\n- Idle down before shutting off machine.\n- Switch off the main shut off (If it has one)\n- Lock all doors.\n- Send in any forms or reciepts.\n\nFull Kit\nAction Packer",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[2].id,
    title: "Watering - Accessing Hydrant",
    description_front:"\n  Checklist\n- Permisson from EPCOR to use city hydrant has been received.\n- Permit sheet & disk in the truck.\n- All the correct hoses you need for the day.\n- Extra fuel & sparkplugs for pumps.\n- Hydrant is in good condition.\n\nProcedure\n1. Call into EPCOR to request permissons for the day.\n     - This will need to be done each day.\n     - Report: Location/Street Names, Hydrant Number, Permit Number, \n                    Company Name, Contact Number, Ability to drain hydrant.\n2. Park vehicle so water tank is accessiblt to the hydrant.\n3. Ensure hydrant pressure is off- Tighten Top Nut.\n4. Remove cap from one side of the hydrant- Ensure other caps are secure.\n5. Attach: Permit Disk\n               : Hydrant Valve\n               : Water Meter Hose\n               : Water Meter\n              : 2 Inch Hose\n               : Hose to water tank.\n6. Open the hydrant vavle fully.\n7. Slowly loosen the top nut to turn on the hydrant.\n8. Fill tank to correct level.\n9. Record amount of water used on pump.",
    description_back:"\nDisconnection\n1. Close hydrant valve fully.\n2. Tighten hydrant top nut until tight.\n3. Disconnect setup from truck & hydrant.\n4. Replace hydrant cap.\n\nCloseout- What does complete look like?\n- Hydrant kit, tools, & hoses are put away neatly.\n- All equipment is secure for travel.\n- All form have been filled out & sent in.\n- Do NOT drink water from the truck/hydrant.\n\nDraining Hydrant\n1. Insert hydrant drainage pump into the hydrant as deep as possible.\n2. Attach clips to trucks battery (red to red, black to black).\n3. Turn on the truck.\n4. Wait until pump is dry.\n5. Disconnect pump & put it away back in the truck.\n6. Replace hydrant cap.\n\nFull-Kit\n- Water Meter       - 2 Meter Rigid Black 2'' Hose 	- Water Meter Kit\n- Water Meter Hose	- Permit Disk                 	- Permit Sheet\n- Hydrant Valve     - Hydrant Drainage Pump       	- Hydrant Wrench",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[2].id,
    title: "Watering - Sod",
    description_front:"\nChecklist\n- You have all the correct hoses you need for the day.\n- Extra fuel & spark plugs for pump.\n- Equipment is in good working condition.\n- You understand the task/locations for the day.\n\nMoisture Check\n- Before starting work conduct a moisture check by feeling the ground.\n     - Soil be fully saturated\n     - Soil under sod should be wet enough to be able to poke a finger into it.\n\nProcedure\n1. Set up hoses so you can work from the far edge towards entry point.\n     - Attempt to have hoses laid out only on grass, if possible.\n2. Leave nozzle slightly cracked to avoid pressure build up.\n3. Turn on pump- run pump on high at all times.\n4. Turn on the water flow.\n5. Water sod using a wide stream of water.\n     - Do not blast sod with a high concentration of water\n6. Apply water until sod is fully saturated before moving on.\n7. Continue until site is complete.\n\nWatering Hills/Inclines\n1. Water from the top down\n2. Swat stream side to side to slowly penetrate the ground to avoid runoff.",
    description_back:"\nDisconnecting Hoses		\n1. Turn off pump.		\n2. Turn off access to tank.		\n3. Crack the nozzle to relieve pressure.		\n4. Disconnect hoses as needed.		\n     - Do not disconnect with out ensureing water pressure is relieved.		\n    \nCloseout- What does complete look like?		\n- Neatly put away equipment in designated locations.		\n- Ensure fuel flow & choke is off on the water pump.		\n- Ensure equipment is secured for travel.		\n- All forms have been filled out & sent in.		\n    \nNotes		\n- Do not drag 2' hoses.		\n- Neatly roll up hoses after use.		\n- Store nozzle & water meter in safe secure location.		\n- Do not drag hoses on ground anything other than grass.		\n- Do NOT drink water from the truck.		\n- Hoses are not to be kept in the vehicle.		\n    \nFull-Kit		\n- 50 Ft 2' Hoses	- 2 Meter Rigid 2' Hose	- 2' Nozzle\n- Premuim Gas	- Spare Spark Plugs	- Standard PPE\n- Water Meter Kit - See Accessing Hydrant Card",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[2].id,
    title: "Watering - Plants & Trees",
    description_front:"\nChecklist		\n- You have all the correct hoses you need for the day.		\n- Extra fuel & spark plugs for pump.		\n- Equipment is in good working condition.		\n- You understand the task/locations for the day.		\n    \nMoisture Check		\nBefore starting work conduct a moisture check throughout the site.		\n     - Brush aside mulch.		\n     - Insert soil moisture probe 6'' into ground.		\n    - Remove soil from probe, sqeeze soil in hand and drop onto ground.		\n     - If soil breaks into large clumps- Soil is at correct levels.		\n            + Should only water if temperatures are above 25oC.		\n     - If the soil breaks into small pieces or dust - Soil needs to be watered.		\n     - If soil does not break - Soil is to wet & does not need watering.		\n     - If soil is consistanly dripping wet alert supervisor & fill out report.		\n~ Do not assume each area of site will be the same moisture level ~		\n    \nProcedure		\n1. Set up hoses so you can work from the far edge towards entry point.		\n2. Turn on pump- run pump on high at all times.		\n3. Turn on the water flow.		\n4. Apply 1-2L to the center of Shrubs for approximately 5-10 seconds.		\n5. Apply 10-20L to the center of Trees approximately 120-180 seconds.		\n6. Continue until every plant that requires water is watered.",
    description_back:"\nDisconnecting Hoses		\n1. Turn off pump.		\n2. Turn off access to tank.		\n3. Crack hose nozzle & relieve the pressure.		\n4. Disconnect hoses as needed.		\n     - Do not disconnect with out ensureing water pressure is relieved.		\n    \nCloseout- What does compelete look like?		\n- Neatly put away equipment in designated locations.		\n- Ensure fuel flow & choke is off on the water pump.		\n- Ensure equipment is secured for travel.		\n- All forms have been filled out & sent in.		\n    \nNotes		\n- Neatly roll up hoses after use.		\n- Store nozzle & water meter in safe secure location.		\n- Do not drag hoses on ground anything other than grass.		\n- Do NOT drink water from the truck.		\n- Hoses are not to be kept in the vehicle.		\n    \nFull-Kit		\n- 1' Hoses	- Shower Head Wand	- Spare Spark Plugs\n- Premuim Gas	- Moisture Check Probe	- Standard PPE",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[2].id,
    title: "Watering - Laydown",
    description_front:"\nChecklist\n- You have all the correct hoses you need.\n- Extra fuel & spark plugs for pump.\n- Equipment is in good working condition.\n \nShrubs Laydown\n1. Check weight of shrubs.\n2. Set up hoses so you can work from the far edge towards entry point.\n3. Turn on pump- run pump on high at all times.\n4. Turn on the water flow.\n5. Using water wand fill up each pot.\n6. Check weight of plants- pots should be heavier than before.\n7. Continue until every plant that requires water is watered.\n\nProcedure\n1. Set up hoses so you can work from the far edge towards entry point.\n2. Turn on pump- run pump on high at all times.\n3. Turn on the water flow.\n4. Using watering wand water tree ball in a cicular motion.\n5. Use moisture probe to ensure proper moisture level.\n6. Continue until every tree that requires water is watered.\n\nDisconnecting Hoses\n1. Turn off water or pump.\n2. Crack hose nozzle & releive pressure.\n3. Disconnect hoses as needed.",
    description_back:"\nCloseout- What does compelete look like?		\n- Neatly put away equipment in designated locations.		\n- Ensure fuel flow & choke is off on the water pump.		\n- Ensure equipment is secured for travel.		\n- All forms have been filled out & sent in.		\n    \nNotes		\n- Neatly roll up hoses after use.		\n- Store nozzle in safe secure location.		\n- Do not drag hoses on ground anything other than grass.		\n- Do NOT drink water from the truck/hose.		\n- Hoses are not to be kept in the vehicle.		\n    \nFull-Kit		\n- 1' Hoses	- Shower Head Wand	- Standard PPE\n- Premium gas	- Spare spark plugs	",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[3].id,
    title: "Subgrade",
    description_front:"\n  Checklist		\n- Review full-kit.		\n- Equipment is in good working condition.		\n- Survey & locates have been completed.		\n- Pre-job site inspection has been completed & damage reported.		\n- Review site plan for any specific depth requirments.		\n		\nProcedure		\n1. Start adding or removing fill where it is needed.		\n2. Manually fill in or remove fill from curbs or any hard to reach areas.		\n3. Continuously check depth & grade stakes.		\n4. Track pack or roll the work area.		\n5. Clean curbs, sidewalks, roadways, etc..		\n6. Set up barricades around work area if needed.		\n		\nNotes		\n- Use dunnage/curb protectors along curbs & plywood on sidewalks or sod to minimize any damage.		\n		\nCloseout- What Does Compelete Look Like?		\n- Forman has approved grade work.		\n- Area has been cleaned up.		\n- Barricades/signs have been set up.		\n- All extra soil is piled neatly or hauled off site.		\n- All tools & equipment are put away.		",
    description_back:"  \nFull-Kit		\n- Site Plan 	    - Wood Stakes   	- Paint Wand\n- Scale Ruler 	  - Measuring Tape	- Dunnage\n- Spray Paint 	  - String Line    	- Spade Shovel\n- Paint Pen 	    - Hammer        	- Flat Shovel\n- Rake      	    - Broom         	- Level\n- Measuring Wheel	- Wheelbarrow	    - Barricades\n- Caution Tape  	- Plywood	",
    revision: "4",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[3].id,
    title: "Final Grade",
    description_front:"\nChecklist		\n- Review full-kit.		\n- Equipment is in good working condition.		\n- Survey & locates have been completed.		\n- Subgrade has been aprroved.		\n- Review plan for any specfic soil or detail requirements.		\n     - Do you have enough soil?		\n     - Do you have the correct type of soil?		\n    \nProcedures		\n1. Start backfilling with skidsteer or wheelbarrows.		\n2. Manually backfill into corners or hard to reach areas.		\n3. Continuously check grade stakes & depth.		\n    - Edges should be down 1 and packed.		\n4. Rake out the soil.		\n     - Use a bunker rake or harley rake for larger areas.		\n5. Pack area with roller/manual packer.		\n6. Top up any low spots or shave down any high spots.		\n7. Clean curbs, sidewalks, roadways,etc..		\n    \nNotes		\n- Use a level to make sure the area is draining.		\n- Do not drive over soil to much as you can over pack it.		\n- Soil must be rolled by the end of every work day.",
    description_back:"\n  Closeout- What does complete look like?		\n- Foreman has approved the grade work.		\n- Area has been cleaned up.		\n- Extra soil has been piled neatly or haued off site.		\n- All tools & equipment has been put away.		\n		\nFull-Kit		\n- Site Plan	- String Line	- Bunker Rake\n- Scale Ruler	- Shovels	- Harley Rake\n- Measuring Tape	- Rakes	- Dunnage\n- Spray Paint	- Broom	- Plywood\n- Paint Pen	- Hammer	- Lazer Level\n- Marker	- Level	- Wood Stakes",
    revision: "4",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[3].id,
    title: "Excavation",
    description_front:"\n  Checklist		\n- Review full-kit.		\n- Equipment is in good working condition.		\n- Survey & locates have been completed.		\n- Pre-job site inspection has been completed & damage reported.		\n- Review plan for any specific depth or detail requirements.		\n		\nProcedures		\n1. Set up curb protectors around work area.		\n2. Start excavation & use a spotter if needed.		\n3. Manually fill in or remove fill from curbs or any hard to reach areas.		\n4. Continuously check depth & grade stakes.		\n     - Use lazer level if needed for slopes.		\n5. Clean curbs, roadways, sidewalks ,etc…		\n6. Set up barricades around work area if needed.		\n		\nNotes		\n- Use dunnage/curb protectors along curbs & plywood on sidewalks or		\nsod to minimize any damage.		\n		\nCloseout- What does complete look like?		\n- Forman has approved grade work.		\n- Area has been cleaned up.		\n- Barricades/signs have been set up.		\n- All extra soil is piled neatly or hauled off site.		\n- All tools & equipment are put away.",
    description_back:"\nFull-Kit		\n- Site plan	- String Line	- Lazer Level\n- Scale ruler	- Shovels	- Barricades\n- Measuring Tape	- Rakes	- Caution Tape\n- Spray Paint	- Broom	- Hammer\n- Marker	- Wheelbarrow	- Curb Protectors\n- Wood Stakes	- Dunnage	\n- Paint Pen	- Plywood	",
    revision: "4",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[3].id,
    title: "Digging Tree Holes - Tree Spade",
    description_front:"\n  Checklist		\n- Review full-kit.		\n- Equipment is in good working condition.		\n- Locates have been completed.		\n- Trees have been marked & no obstructions are present.		\n		\nProcedures		\n1. Drive up to marked tree & place spade in the middle of the mark.		\n     - Use plywood on side walks/sod if need to reach the mark.		\n2. Spade the hole & move slowly to designated area to drop soil plug.		\n    - Use a spotter if vision is limited.		\n3. Barricade or mark off the hole if not planting that day.		\n4. Clean up the work area.		\n		\nNotes		\n-Do not place spade on sod or asphalt **		\n     - Place plywood underneath or place it on clay.		\n		\nCloseout- What does complete look like?		\n- Hole is at correct depth & width.		\n- Hole is marked off if being left open overnight.		\n- Area has been cleaned up.		\n- All tools & equipment have been put away.",
    description_back:"\nFull-Kit	- Site Plan	- Paint Pen\n- Scale Ruler	- Caution Tape\n- Measuring Tape	- Spray Paint\n- Wood Stakes	- Plywood\n- Hammer	- Dunnage\n- Marker	- Shovel\n- Broom	- Tree Stakes\n	\n** Do Not Forget The Controller For The Tree Spade.**",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[3].id,
    title: "Digging Tree Holes - Hand Shoveling",
    description_front:"\nChecklist		\n- Equipment is in good working condition.		\n- Locates have been completed.		\n- Trees have been marked & no obstructions are present.		\n    \nProcedures		\n1. Measure a circle around the marked area 65 wide.		\n2. Start digging the hole with a shovel into wheelbarrow or to the side.		\n     - If the ground is hard use a pickaxe to loosen the soil.		\n3. Keep digging until the hole is 4'' lower than the reqired depth.		\n     - The bottom of the hole must be flat and atleast 24'' wide		\n4. Add 4'' of topsoil to the bottom to get the hole to the required depth.		\n5. Clean up the work area.		\n    \nNotes		\n-Do not place soil on sod, use a piece of plywood or wheelbarrows.		\n    \nCloseout- What does complete look like?		\n- Hole is at correct depth & width.		\n- Hole is marked off if being left open overnight.		\n- Area has been cleaned up.		\n- All tools & equipment have been put away.",
    description_back:"\nFull-Kit	- Site Plan	      - Paint Pen\n          - Scale Ruler	    - Caution Tape\n          - Measuring Tape	- Spray Paint\n          - Wood Stakes   	- Plywood\n          - Hammer        	- Pickaxe\n          - Marker        	- Shovels\n          - Broom           - Tree Stakes",
    revision: "1",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[3].id,
    title: "Mulch",
    description_front:"\n  Checklist	\n- Review Full-kit.	\n- Equipment is in good working condition.	\n- Final/Sub-grade has been approved by forman.	\n- Review plan for any specific mulch requirements.	\n	\nProcedure	\nPlanting Beds	\n1. If covering soil, apply devrynol until soil is visiably soaked.	\n2. Apply 4 inches/10cm of mulch, evenly over the whole planter.	\n      - Use skid steer or wheelbarrows for larger areas.	\n      - Use shovels around shrubs and trees.	\n3. Make sure mulch is not pushed right up to the base of the plant.	\nTrees	\n1. Apply devrynol until soil is visiably soaked.	\n2. Apply 4 inches/10cm of mulch even over the tree well.	\n    - Slope the mulch down to the flare of the tree.	\n    - Do not cover the flare of the tree.	\n	\nCloseout- What does complete look like?	\n- Work area is clean & there is no loose mulch pieces.	\n- All soil is fully covered.	\n- Mulch is raked out evenly.	\n- Extra mulch has been piled neatly or hauled off site.	\n- Work has been approved by the forman.",
    description_back:"\n  Notes		\nIf you are mulching a large area, place wood stakes around the area with a line 4 inches from the ground to help keep an even spread.		\n		\nFull-Kit		\n- Site Plan	- Water	- Wheelbarrow\n- Scale Ruler	- Sprayer	- Pitchfork\n- Measuring Tape	- Measuring Cup	- Rake\n- Devrynol	- Mulch Shovel	- Broom\n- Hammer	- Wood Stakes	- Shovel\n- Paint Pen	- Marker	",
    revision: "4",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[3].id,
    title: "Rock",
    description_front:"\nChecklist	\n- Review full-kit.	\n- Equipment is in good working condition.	\n- Subgrade, Final grade & plants have been completed.	\n- Site plan has been reviewed & work area is marked out.	\n  \nProcedure	\n1. Make sure sidewalks or curbs are clear of debris.	\n2. Roll out fabric to desired length, width, or cut to specific shape.	\n     - Fabric must cover all of the ground	\n     - Edges/joints must have a 1 foot overlap.	\n     - Fabric along edges of curbs/sidewalks must come up 1-2 inches.	\n     - Cut holes around any plants or trees.	\n3. Secure fabric with staples or hold down with rocks.	\n4. Apply the rock until all the fabric is covered.	\n5. Trim or tuck in any loose or exposed fabric with scissors or butane torch.	\n6. Make sure work area is clean & all tools have been put away.	\n  \nCloseout- What does complete look like?	\n- Area is cleaned up.	\n- All tools & equipment are put away.	\n- All fabric is covered & extra isnt showing.	\n- Any extra rock is piled neatly or hauled off site.	\n- Work has been approved by forman.	",
    description_back:"\n  Full-kit		\n- Site Plan	- Wheelbarrow	- Staples\n- Scale Ruler	- Shovels	- Spray Paint\n- Weed Fabric	- Broom	- String Line\n- Knife	- Hammer	- Wood Stakes\n- Scissors	- Butane Torch	- Marker",
    revision: "4",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[3].id,
    title: "Edging",
    description_front:"\n  Checklist	\n- Review full-kit.	\n- Equipment is in good working condition.	\n- Bed shape has been marked out.	\n- Do you have enough edging?	\n- Do you have the proper PPE?	\n	\nProcedure	\n1. Use shovel, half-moon edger, or turf-tech to dig a 4 inch deep ditch.	\n     - Move any mulch back away from ditch.	\n     - Use a string line to create a straight line.	\n2. Roughly lay out the edging.	\n3. Start at a corner or edge of curb/sidewalk.	\n4. When backfilling make sure edging is level & in a straight line.	\n     - Use a mallet & and 2x4 to level out high areas.	\n     - Pack soil in very tight with hands or feet.	\n     - Soil should be down 2'' on the planter side & 1'' on the sod side.	\n5. Use a grinder/hacksaw to cut off any excess edging.	\n6. Once connected & back filled, step back & a make sure it is straight.	\n     - Adjust edging if needed.	\n7. Clean up work area & tools have been put away.	\n	\nCloseout- What does complete look like?	\n- Any extra soil has been removed or raked out.	\n- Mulch or sod has been put back next to the edging.	\n- Work has been approved by forman.	",
    description_back:"\n  Full-Kit		\n- Site Plan	- Wood Stakes	- Grinder\n- Scale Ruler	- Hammer	- Hacksaw\n- Measuring Tape	- Half-moon Edger	- Face Shield\n- Spray Paint	- Shovels	- Broom\n- Sting Line	- Rakes	- Gloves\n- Rubber Mallet	- Turf-Tech	- Small 2x4",
    revision: "4",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[4].id,
    title: "Weeding",
    description_front:"  \n  Checklist		\n- All employees are properly trained on correct ergonomic positions.		\n- Equipment is in good working condition.		\n-The work area is clear of any obstructions & clearly marked.		\n-Work area has been reviewed & all necessary permits/drawings have been obtained.		\n		\nProcedure		\n1. All PPE is being worn & used correctly.		\n2. Identify the weeds that ned to be removed.		\n3. Start picking the weeds using manual methods or with the correct tools.		\n     - Try to pull out the whole root system of the weed.		\n4. Dicard weeds into garbage bags.		\n5. Be aware of any obstacles that may occur.		\n     - If any needles or sharps are found dispose in sharps container.		\n     - If you come across a homeless person in the beds: Move to a different area & ignore any confrontation.		\n6. Make sure no tools are left lying around & all garbage bags are accounted for.		\n		\nNotes		\n- If you are working on the Valley Line LRT, stay back 1.75m from the rails.		\n		\nCloseout: What does complete look like?		\n-Work area is clean & tools are put away.		\n-All weeds are removed unless they are being sprayed.",
    description_back:"  \nFull-Kit\n- Site Plan       	- Knee Pads\n- Garbage Bags    	- Gloves\n- Sharps Container	- Pruners\n- Grabbers        	- Weeding Rake\n- Weed Pullers    	- Barricades/Signs",
    revision: "4",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[4].id,
    title: "Picking Garbage",
    description_front:"\n  Checklist		\n- All employees are properly trained on correct ergonomic positions.		\n- Equipment is in good working condition.		\n- The work area is clear of any obstructions & clearly marked.		\n- Work area has been reviewed & all necessary permits/drawings have	been obtained.		\n		\nProcedure		\n1. All PPE is being worn & used correctly.		\n2. Set up barricades or signs around the work area.		\n3. Start picking up garbage using manual methods or with the correct tools.		\n4. Place all garbage into garbage bags.		\n     - Separate recyclables if possible.		\n     - Separate into pre-determined categories.		\n5. Be aware of any obstacles that may occur.		\n     - If any needles or sharps are found dispose in sharps container.		\n     - If you come across a homeless person in the beds: Move to a different area & ignore any confrontation.		\n6. Make sure no tools are left lying around & all garbage bags are accounted for.		\n7. Place all garbage bags in appropriate containers for recycling &	document quanties of each bag.		\n8. Wash/disinfect your hands/tools after work is complete or as needed.		\n		\nNotes		\n- If you are working on the Valley Line LRT, stay back 1.75m from the rails.",
    description_back:"\n  Closeout: What does complete look like?		\n- Work area is clean & tools are put away.		\n- All garbage bags have been disposed of into correct containers.		\n		\nFull-Kit\n- Site Plan         - Knees Pads\n- Garbage Bags  	  - Gloves\n- Sharps Container	- Hand Sanitaizer\n- Grabbers        	- Barricades/Signs",
    revision: "4",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[4].id,
    title: "Pruning",
    description_front:"\nChecklist		\n- All employees are properly trained on correct ergonomic positions.		\n- Equipment is in good working condition.		\n- All employees are properly trained on what to look for:		\n     - Damage, disease, death, correct shape/size.		\n- The work area is clear of an obstructions & is clearly marked.		\n- Work area has been reviewed & all necessary permits/drawing obtained.		\n    \nProcedure		\n1. Assess the plant or tree to determine course of action.		\n2. Take pictures of affected area & send it into Reports.	\nSmall Shrubs		\n     - Use pruners to cut off affected area just above the next living branch		\n       or bud at a 45 degree angle.		\nGrasses		\n     - Cut excess foliage straight across about 1-2ft from the ground.		\nPerennials		\n     - Remove any dead leaves/flowers from around the base of the plant.		\nTrees		\n     - Cut off any affected area just above the next living branch/bud.		\n     - If the branch is too high, use a long pruner or a ladder.		\n          - Have a spotter holding the ladder.		\n          - Put pylons or caps on the top of the metal tree stakes for safety.		\n3. Clean up any pruned brush/yard waste as you go along & place into appropriate containers/bags.		\n4. Make sure no tools are left lying around the work area.",
    description_back:"\nNotes		\n- If you are working on the Valley Line LRT, Stay back 1.75m from the rails.		\n   \nCloseout- What does complete look like?		\n- Work area is clean & tools are put away.		\n- All brush have been disposed of correctly.		\n- Tools have been disinfected.		\n    \nFull-Kit		\n- Site Plan       	- Knees Pads	     - Ladder\n- Garbage Bags    	- Gloves	          - Pylons/Caps\n- Sharps Container	- Disinfectant    	- Knife\n- Pruners	          - Barricades/Signs	- Scissors",
    revision: "4",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[4].id,
    title: "Mowing",
    description_front:"  \nChecklist		\n- All employees are properly trained on correct ergonomic positions.		\n- Equipment is in good working condition.		\n- The work area is clear of an obstructions & is clearly marked.		\n- Work area has been reviewed & all necessary permits/drawings obtained.		\n    \nProcedure		\n1. Unload machines from the truck using the correct ergonomic positions	or have a co-worker help you.		\n2. All proper PPE is being worn or used correctly.		\n3. Before starting check the oil level & top up the fuel in a spill tray.		\n4. Start the mower & allow it to warm up while looking for any leaks.		\n5. Begin mowing.		\n    If working on the Valley Line LRT:		\n      - Must work in pairs (one spotter in front outside the 1.75m & the second mowing inside the 1.75m).		\n     - When train approaches, the front mower will move to POS & notify	the second mower to move over.		\n6. Be aware of any obstacles that may arise (Pedestrians, vechiles, trains)		\n      - Point discharge of mower away from vehicles, pedesrtians, railway, etc…		\n7. Once finished, make sure area & equipment is clean.		\n8. Make sure any garbage or debris is picked up & disposed of in the correct containers/bags.",
    description_back:"  \n  Closeout- What does complete look like?		\n- Work area is clean & tools are put away.		\n- Any garbage or grass clippings have been disposed of correctly.		\n		\nFull-Kit\n- Site Plan     - Hearing Protection\n- Garbage Bags	- Barricades/Signs\n- Spill Kit     - Fuel\n- Spill Tray  	- Oil",
    revision: "4",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[4].id,
    title: "Weed Wacking",
    description_front:"\n  Checklist	\n- All employees are properly train on the equipment.	\n- All equipment is in good working condition.	\n- The work area is clear of any obstructions & is clearly marked.	\n- Work area has been reviewed & all necessary permits/drawing obtained.	\n	\nProcedure	\n1. Unload machines from the truck using the correct ergonomic position or have a co-worker help you.	\n2. All proper PPE is being worn & used correctly.	\n3. Before starting, top up the fuel in a a spill tray.	\n     - Make sure the fuel & 2 stroke oil is mixed correctly.	\n4. Start the weed wacker & allow it to warm up while checking for leaks.	\n5. Begin weed wacking.	\n      - Be aware of any obstacles that may arise.	\n      - Stop weed wacking when a pedestrian is close by.	\n      - If working on the Valley line LRT within 1.75m of the trail rail a look out must be used.	\n6. Once finished, make sure area & equipment is clean.	\n7. Make sure any garbage or debris is picked up & disposed of in the correct containers/bags.	\n	\nNotes	\n- If you need new weed wacking wire you MUST turn off the machine before you replace or put new wire in.	",
    description_back:"  \nCloseout: What does complete look like?		\n- Work area is clean & tools are put away.		\n- Any garbage or grass clippings have been disposed of correctly.		\n   \nFull-Kit		\n- Site Plan     - Hearing Protection	- Wire\n- Garbage Bags	- Barricades/Signs    - Harness\n- Spill kit     - Fuel                - Scissors\n- Spill Tray    - Oil                 - Pliers",
    revision: "4",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  },{
    category_id: categories[4].id,
    title: "Herbicide Application",
    description_front:"  \nChecklist	\n- All employees are properly trained on the use of herbicied application.	\n- Correct permits have been filled out for herbicide use.	\n- All equipment is in good working condition.	\n- The work area is clear of any obstructions to ensure optimal application.	\n	\nMixing	\n- Will only be preformed by the crews Person in Charge.	\n- Performed in/over a spill tray.	\n- Follow guidelines found on pesticide label for proper ratios.	\n-Keep track & record amount of concentration used.	\n- Specialized PPE must be worn when mixing.	\n1. Place all material in spill tray.	\n2. Pour correct amount of concentrate in a measuring cup.	\n3. Pour concentrate into tank or mixing jug.	\n4. Mix with correct amount of water.	\n5. Clean & put away pesticde & any tools used.	\n	\nProcedures - Wick Wand	\n1. Fill wick wand with pre-mixed pesticide.	\n2. Turn the valve to open.	\n3. Dab the wand onto the weed insureing blue dye is present.	\n4. Complete these step until all required weeds have been covered.	\n5. Turn the valve to off & discard of any extra pesticide properly.	\n6. Properly clean & rinse of wand at the work site or back at facility.	",
    description_back:"  \n Procedures- Back Pack Sprayer		\n 1. Fill Sprayer with water & correct amount of concentrate.		\n 2. Turn on or manually pressurize the sprayer.		\n 3. Hold spray gun about 4'' from the weed for approximately 1-2 sec.		\n 4. Ensure weed is covered and blue dye is present.		\n 5. Complete these steps until all required weeds have been sprayed.		\n 6. Discard of any extra pesticide properly.		\n 7. Properly clean & rinse out sprayer at the work site or back at facility.		\n     \n Closeout: What does complete look like?		\n - Work area is clean & tools are put away.		\n - Extra pesticide has been disposed of correctly.		\n - Tanks/Wands have been properly rinsed.		\n     \n Full-Kit		\n - Authorized Assistant/Certified Applicator Card (or picture of card).		\n - Sprayer or Wand	- Pesticides	      - Water\n - Site Plan        - Pesticde Permit	  - Funnel\n - Garbage Bags	    - Barricades/Signs	- Measuring Cup\n - Spill Kit	      - Anemometer	      - Specfic PPE\n - Spill Tray	      - Humidity Meter	  - Application Signs",
    revision: "5",
    image_url:null,
    created_at: currentDate,
    updated_at: currentDate,
    priority_id: cardPriority[0].description
  }]

  


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