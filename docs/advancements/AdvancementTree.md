# AdvancementTree

**Package:** `net.minecraft.advancements`
**Type:** class

## Methods

### remove

```java
private void remove(AdvancementNode p_301231_)
```

**Parameters:**

- `p_301231_` (`AdvancementNode`)

**Returns:** `private void`

### remove

```java
public void remove(Set<ResourceLocation> p_300917_)
```

**Parameters:**

- `p_300917_` (`Set<ResourceLocation>`)

**Returns:** `public void`

### addAll

```java
public void addAll(Collection<AdvancementHolder> p_301192_)
```

**Parameters:**

- `p_301192_` (`Collection<AdvancementHolder>`)

**Returns:** `public void`

### tryInsert

```java
private boolean tryInsert(AdvancementHolder p_301290_)
```

**Parameters:**

- `p_301290_` (`AdvancementHolder`)

**Returns:** `private boolean`

### clear

```java
public void clear()
```

**Returns:** `public void`

### roots

```java
public Iterable<AdvancementNode> roots()
```

**Returns:** `public Iterable<AdvancementNode>`

### nodes

```java
public Collection<AdvancementNode> nodes()
```

**Returns:** `public Collection<AdvancementNode>`

### get

```java
public AdvancementNode get(ResourceLocation p_301217_)
```

**Parameters:**

- `p_301217_` (`ResourceLocation`)

**Returns:** `AdvancementNode`

### get

```java
public AdvancementNode get(AdvancementHolder p_301246_)
```

**Parameters:**

- `p_301246_` (`AdvancementHolder`)

**Returns:** `AdvancementNode`

### setListener

```java
public void setListener(AdvancementTree.Listener p_301114_)
```

**Parameters:**

- `p_301114_` (`AdvancementTree.Listener`)

**Returns:** `public void`

### onAddAdvancementRoot

```java
void onAddAdvancementRoot(AdvancementNode p_301125_)
```

**Parameters:**

- `p_301125_` (`AdvancementNode`)

### onRemoveAdvancementRoot

```java
void onRemoveAdvancementRoot(AdvancementNode p_300944_)
```

**Parameters:**

- `p_300944_` (`AdvancementNode`)

### onAddAdvancementTask

```java
void onAddAdvancementTask(AdvancementNode p_301259_)
```

**Parameters:**

- `p_301259_` (`AdvancementNode`)

### onRemoveAdvancementTask

```java
void onRemoveAdvancementTask(AdvancementNode p_301064_)
```

**Parameters:**

- `p_301064_` (`AdvancementNode`)

### onAdvancementsCleared

```java
void onAdvancementsCleared()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Listener` | interface |  |
