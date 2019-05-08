First we can try dropping an egg from the 10th floor, then the 20th... and if it ever breaks, checking the interval between starting from the bottom.  

Notice that regardess of hwo we drop egg 1, egg2 must do a linear search between the breaking floor and the next highest non-breaking floor.  

We'd like to design a system for which dropping egg 1 allows the number of drops to be as consistent as possible, regardless of whether Egg 1 breaks on the first drop or the last drop.  

1. A perfectly load-balanced system is one in which Drops(Egg1) + Drops(Egg2) is always the same. 
2. For that to be the case, since each drop of Egg1 takes one more step, Egg2 is allowed one fewer step.  
3. We must reduce the number of steps potentially required by Egg 2 by one drop each time.  For example, if Egg 1 is dropped on floor 20 and then floor 30, Egg 2 is potentially required to take 9 steps.  When we drop egg 1 again, we must reduce potential egg 2 to only 8.  
4. Egg 1 must start at floor X, then go up by X - 1 floors, then X - 2 until it gets to 100 ***
5. Solve for X where X + (X - 1) + (X - 2) + ...  + 1 = 100
5. x(x + 1) / 2 = 100
5. x = 13.65
6. Notice we need X to be an integer.  Check X = 14 and X = 13 and notice that X = 14 has a smaller round up case.  
7. To generalize, we can solve for x in x(x+1)/2 = number of floors