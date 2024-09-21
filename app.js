let old = [
    ['Jaylee Macy', 'development'],
    ['John Smith', 'management'],
    ['Blossom Hartley', 'design'],
    ['Austin Carpenter', 'marketing'],
    ['Joan Knowles', 'development'],
    ['Sally Nunez', 'management'],
    ['Laurel Ward', 'development'],
    ['Lark Simon', 'marketing'],
    ['Jane Stone', 'management'],
    ['Courtney Olson', 'development'],
  ];
  
  let newName = [];
  
  for (let i = 0; i < old.length; i++) {
    if (old[i][1] == 'development') {
      newName.push(old[i]);
    }
  }

  console.log(newName);
