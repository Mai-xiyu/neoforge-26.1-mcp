# SoundEventRegistrationSerializer

**Package:** `net.minecraft.client.resources.sounds`
**Type:** class
**Implements:** `JsonDeserializer<SoundEventRegistration>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### deserialize

```java
public SoundEventRegistration deserialize(JsonElement p_119827_, Type p_119828_, JsonDeserializationContext p_119829_)
```

**Parameters:**

- `p_119827_` (`JsonElement`)
- `p_119828_` (`Type`)
- `p_119829_` (`JsonDeserializationContext`)

**Returns:** `public SoundEventRegistration`

### SoundEventRegistration

```java
return new SoundEventRegistration()
```

**Returns:** `return new`

### getSounds

```java
private List<Sound> getSounds(JsonObject p_119831_)
```

**Parameters:**

- `p_119831_` (`JsonObject`)

**Returns:** `private List<Sound>`

### getSound

```java
private Sound getSound(JsonObject p_119836_)
```

**Parameters:**

- `p_119836_` (`JsonObject`)

**Returns:** `private Sound`

### getType

```java
private Sound.Type getType(JsonObject p_119833_, Sound.Type p_119834_)
```

**Parameters:**

- `p_119833_` (`JsonObject`)
- `p_119834_` (`Sound.Type`)

**Returns:** `private Sound.Type`
