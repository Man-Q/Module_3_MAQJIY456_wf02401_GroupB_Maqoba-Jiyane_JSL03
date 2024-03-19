function cookSteak(steakWeight, desiredDoneness) {
    let grillTemperature = 0;
    let steakTemperature = 0;
    
    // Step 1: Preheat the grill
    grillTemperature = 204; 
    
    // Step 2: Season the steak
    const seasoning = 'Salt and Pepper';
    // Apply seasoning to both sides of the steak
    
    // Step 3: Cook the steak
    while (steakTemperature < desiredDoneness) {
      // Grill the steak and measure internal temperature
      // Adjust grill temperature and cooking time based on steakWeight and desiredDoneness
      // Update steakTemperature
      
      // If the steak is done, break out of the loop
    }
    
    // Step 4: Serve the steak
    if (steakTemperature >= desiredDoneness) {
      return 'Steak is ready to serve!';
    } else {
      return 'Steak needs more cooking.';
    }
  }
  
  // Usage example:
  const result = cookSteak(16, 63); // Cook a 16 oz steak to medium-rare (63°C)
  console.log(result);
  
  /*
    Imperative Programming Style:

    This code explicitly defines each step of the cooking process (preheating the grill, seasoning the steak, 
      cooking to the desired doneness, and serving the steak) using specific instructions and control flow constructs 
      (e.g., if statements, while loop).
    It provides detailed instructions on how each step should be carried out, such as setting grill temperature, 
      applying seasoning, and iterating over each cooking step.

    **********Mention any specific code structures or patterns that align with the chosen programming paradigm.**********

    Sequential Execution: The code follows a sequence of steps, where each step (Preheat grill, Season steak, Cook steak 
      until desired doneness, Serve steak) is explicitly defined and executed in order.
    Mutable State: Variables like grillTemperature, seasoning, and steakTemperature are updated throughout the cooking 
      process to track the state changes.
    Control Flow Constructs: Imperative constructs like if statements and while loop are used to control the flow of 
      execution based on conditions and iteration.
  */