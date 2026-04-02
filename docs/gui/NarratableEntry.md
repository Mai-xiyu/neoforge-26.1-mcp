# NarratableEntry

**Package:** `net.minecraft.client.gui.narration`
**Type:** interface
**Extends:** `TabOrderedElement, NarrationSupplier`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### narrationPriority

```java
NarratableEntry.NarrationPriority narrationPriority()
```

**Returns:** `NarratableEntry.NarrationPriority`

### isActive

```java
default boolean isActive()
```

**Returns:** `default boolean`

### isTerminal

```java
public boolean isTerminal()
```

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `NarrationPriority` | enum |  |
