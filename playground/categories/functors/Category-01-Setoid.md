Setoid Category in TypeScript
=============================

Setoid is a category in which we can make equivalences.  In Fantasy Land,
Setoid implements the following interface:

    const equals = 'fantasy-land/equals';
    
    interface Setoid {
        [equals](a: Setoid): boolean;
    }

We have a type A:

    class A implements Setoid {

    }