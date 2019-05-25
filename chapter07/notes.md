Create elegant maintainable object-oriented code.  

** STEPS!

1) Handle ambiguity by asking clarifying questions like who is going to use it and how are they going to use it?  

Know that reequirements are not straightforward without extensive context.  

2) Define core objects like Table, chair etc. 

3) Analyze relationships

Group to members, iheritance and one-to-many/one-to-one/many-to-many
Test and check the relationships for assumptions

4) Investigate actions

Consider key actions of objects and how they relate to each other.  
Will likely forget some object and need to update design.  

** Design Patterns

a) Singleton design pattern

Ensures that a class only has one instance and ensures access to instance through the application.  

Many people dislike the Singleton design pattern 'anti-pattern' as it can interfere with unit testing

b) Factory Method design pattern

Offer interface creating instance of class with subclass deciding which class to instsantiate.  

Factory method takes a parameter representing which class to instantiate.  

