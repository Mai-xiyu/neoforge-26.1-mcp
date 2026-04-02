# Resource

**Package:** `net.neoforged.neoforge.transfer.resource`
**Type:** interface

## Description

Most general form of a resource that can be quantified and moved around.


Instances must all be immutable, comparable with `Object#equals(Object)`
and they must implement a suitable `Object#hashCode()`.



Note, the amount is not encoded in the resource, for that you can use something like `ResourceStack`.

## Methods

### isEmpty

```java
boolean isEmpty()
```

**Returns:** `boolean`
