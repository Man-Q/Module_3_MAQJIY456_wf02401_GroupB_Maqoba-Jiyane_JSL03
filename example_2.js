function cookSteak(steakWeight, desiredDoneness) {
    const grillTemperatureCelsius = 204; 
    const seasoning = 'Salt and Pepper';
  
    // Define the cooking process
    const cookingProcess = [
      { action: 'Preheat grill', temperature: grillTemperatureCelsius },
      { action: 'Season steak', seasoning },
      { action: 'Cook steak until desired doneness', desiredDoneness },
      { action: 'Serve steak' }
    ];
  
    // Execute the cooking process
    for (const step of cookingProcess) {
      switch (step.action) {
        case 'Preheat grill':
          console.log(`Preheating grill to ${step.temperature}°C`); // Display temperature in Celsius
          break;
        case 'Season steak':
          console.log(`Seasoning the steak with ${step.seasoning}`);
          break;
        case 'Cook steak until desired doneness':
          console.log(`Cooking steak to ${step.desiredDoneness}°C`); // Display temperature in Celsius
          break;
        case 'Serve steak':
          console.log('Steak is ready to serve!');
          break;
        default:
          console.log('Invalid step in the cooking process.');
      }
    }
  }
  
  cookSteak(16, 63); // Cook a 16 oz steak to medium-rare (63°C)
  

  /*
    Declarative Programming Style:

    This code represents the cooking process using a higher-level abstraction: an array of objects (cookingProcess).
    Each object in the cookingProcess array describes an action to be taken during the cooking process using descriptive 
      properties (action, temperature, seasoning, desiredDoneness).
    It does not explicitly specify how each action should be performed; instead, it focuses on defining the overall 
      cooking process and its components in a more abstract and descriptive manner.

    **********Mention any specific code structures or patterns that align with the chosen programming paradigm.**********

    Data Abstraction: The cooking process is abstracted into a data structure (cookingProcess) that represents the 
      sequence of steps to be executed. Each step is described using properties like action, temperature, seasoning, and 
      desiredDoneness.
    Higher-Level Abstractions: Instead of low-level control flow constructs, the code utilizes higher-level abstractions 
      like array iteration (for...of loop) and object properties to describe the cooking process without specifying how 
      each action should be performed.
    Declarative Constructs: The code focuses on what needs to be done (action) rather than how it should be done, 
      aligning with the declarative paradigm's principle of expressing the logic of computation without specifying the 
      control flow.
  */