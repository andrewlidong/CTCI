Naively we can divide the bottles across the 10 strips, first in groups of 100.  Then wait seven days.  When the results come back we look for a positive result across the test strips.  Then select the bottles associated with the positive test strip, ignore all the other bottles, and repeat the process.  We perform this operation until there is only one bottle left in the test set.  

1. Divide the bottles across available test strips, one drop per test strip.  
2. After seven days, check the test strips for results
3. On the positive test strip, select the bottles associated with it into a new set of bottles.  If the size is 1 we'll have located the poisoned bottle.  If greater, go to step 1.  

This approach will take at most 28 days.  

It might be mre optimal to run multiple tests at once.  If we divide the bottles into 10 groups then day 7 will reveal the first digit of the bottle number.  A positive result on strip i at day 7 shows that the first digit (100's digit) of the bottle number is i.  

Dividing the bottles in a different way can reveal the seconnd or third digit.  We just need to run these tests on different days so we don't confuse the results.  This approach will take 10 days to get the hundredths, tenths, and single digits.  

Finally, optimally we can map 1000 keys to 10 binary values such that each key is mapped to a unique configuration of values, it's binary number representation.  Take each bottle number and look at its binary representation.  If there's a 1 in the ith digit, then we will add a drop of this bottle's contents to test strip i.  Observe that 2^10 is 1024 so 10 test strips will be enough to handle up to 1024 bottles.  