
let JOURNAL = [];

function addEntry(events, squirrel){
    JOURNAL.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
    ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts","beer"], true);
addEntry(["weekend", "pizza", "peanuts"], true);

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
 }

 function tableFor(event, journal){
    let table = [0, 0, 0, 0];
    for (let entry of journal){
        let index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
 }

 function journalEvents(journal){
    let events = [];
    for (let entry of journal){
        for (let event of entry.events){
            if (!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
 }
