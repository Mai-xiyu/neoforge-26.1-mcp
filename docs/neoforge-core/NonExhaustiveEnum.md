# NonExhaustiveEnum

**Package:** `net.neoforged.neoforge.internal`
**Type:** @interface
**Annotations:** `@Target(ElementType.TYPE)`, `@ApiStatus`

## Description

Signifies that an enum is not exhaustive, and additional values may be added while NeoForge is stable.

Care should be taken to ensure no reliance on the specific number or order of values in a tagged enum.



Do not rely on the number of values.

Do not rely on the ordinal of a specific value.

Do not use in a switch without a default case.

## Methods

### reason

```java
String reason()
```

**Returns:** `String`
