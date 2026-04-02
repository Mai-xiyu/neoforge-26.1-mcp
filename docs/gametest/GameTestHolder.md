# GameTestHolder

**Package:** `net.neoforged.neoforge.gametest`
**Type:** @interface
**Annotations:** `@Target(ElementType.TYPE)`, `@Retention(RetentionPolicy.RUNTIME)`

## Description

Marks a class as containing game tests that should be registered automatically.
All methods annotated with `GameTest` or `GameTestGenerator` will be registered.
