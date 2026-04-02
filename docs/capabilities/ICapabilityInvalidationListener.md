# ICapabilityInvalidationListener

**Package:** `net.neoforged.neoforge.capabilities`
**Type:** interface
**Annotations:** `@FunctionalInterface`

## Description

A listener for block capability invalidation.


Register with `ServerLevel#registerCapabilityListener`.


The listener will be held by a weak reference, so it is important to keep a strong reference to it
as long as you need it.

## Methods

### onInvalidate

```java
boolean onInvalidate()
```

**Returns:** `boolean`
