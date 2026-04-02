# PrefixGameTestTemplate

**Package:** `net.neoforged.neoforge.gametest`
**Type:** @interface
**Annotations:** `@Target({ ElementType.TYPE, ElementType.METHOD })`, `@Retention(RetentionPolicy.RUNTIME)`

## Description

When used on a class, this sets the default state for whether
to prefix any contained game test templates with the `Class#getSimpleName() simple class name` or not.



When used on a method, this defines whether the specific method should be prefixed with the simple class name or not.



If this annotation cannot be found on a game test method or its containing class, the default behavior is to prefix the class name.



Method annotations override any class annotations.
@see GameTestHolder
