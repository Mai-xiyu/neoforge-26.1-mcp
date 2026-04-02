# ClientAdvancements

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ClientAdvancements

```java
public ClientAdvancements(Minecraft p_286782_, WorldSessionTelemetryManager p_286391_)
```

**Parameters:**

- `p_286782_` (`Minecraft`)
- `p_286391_` (`WorldSessionTelemetryManager`)

**Returns:** `public`

### update

```java
public void update(ClientboundUpdateAdvancementsPacket p_104400_)
```

**Parameters:**

- `p_104400_` (`ClientboundUpdateAdvancementsPacket`)

**Returns:** `public void`

### getTree

```java
public AdvancementTree getTree()
```

**Returns:** `public AdvancementTree`

### setSelectedTab

```java
public void setSelectedTab(AdvancementHolder p_301030_, boolean p_104403_)
```

**Parameters:**

- `p_301030_` (`AdvancementHolder`)
- `p_104403_` (`boolean`)

**Returns:** `public void`

### setListener

```java
public void setListener(ClientAdvancements.Listener p_104398_)
```

**Parameters:**

- `p_104398_` (`ClientAdvancements.Listener`)

**Returns:** `public void`

### get

```java
public AdvancementHolder get(ResourceLocation p_301015_)
```

**Parameters:**

- `p_301015_` (`ResourceLocation`)

**Returns:** `AdvancementHolder`

### onUpdateAdvancementProgress

```java
void onUpdateAdvancementProgress(AdvancementNode p_300896_, AdvancementProgress p_104405_)
```

**Parameters:**

- `p_300896_` (`AdvancementNode`)
- `p_104405_` (`AdvancementProgress`)

### onSelectedTabChanged

```java
void onSelectedTabChanged(AdvancementHolder p_301171_)
```

**Parameters:**

- `p_301171_` (`AdvancementHolder`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Listener` | interface |  |
