# UnbakedModelExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Extends:** `ResolvableModel`
**Side:** 🖥️ Client

## Description

Extension for `UnbakedModel`.

## Methods

### fillAdditionalProperties

```java
.OverrideOnly
    default void fillAdditionalProperties(ContextMap.Builder propertiesBuilder)
```

**Parameters:**

- `propertiesBuilder` (`ContextMap.Builder`)

**Returns:** `.OverrideOnly
    default void`

### resolveDependencies

```java
default void resolveDependencies(Resolver resolver)
```

**Parameters:**

- `resolver` (`Resolver`)
