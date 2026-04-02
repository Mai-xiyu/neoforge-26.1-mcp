# PlaySoundCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_138157_)
```

**Parameters:**

- `p_138157_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### source

```java
private static LiteralArgumentBuilder<CommandSourceStack> source(SoundSource p_138152_)
```

**Parameters:**

- `p_138152_` (`SoundSource`)

**Returns:** `private static LiteralArgumentBuilder<CommandSourceStack>`

### getCallingPlayerAsCollection

```java
private static Collection<ServerPlayer> getCallingPlayerAsCollection(ServerPlayer p_330601_)
```

**Parameters:**

- `p_330601_` (`ServerPlayer`)

**Returns:** `private static Collection<ServerPlayer>`

### playSound

```java
private static int playSound(CommandSourceStack p_138161_, Collection<ServerPlayer> p_138162_, ResourceLocation p_138163_, SoundSource p_138164_, Vec3 p_138165_, float p_138166_, float p_138167_, float p_138168_)
```

**Parameters:**

- `p_138161_` (`CommandSourceStack`)
- `p_138162_` (`Collection<ServerPlayer>`)
- `p_138163_` (`ResourceLocation`)
- `p_138164_` (`SoundSource`)
- `p_138165_` (`Vec3`)
- `p_138166_` (`float`)
- `p_138167_` (`float`)
- `p_138168_` (`float`)

**Returns:** `private static int`
