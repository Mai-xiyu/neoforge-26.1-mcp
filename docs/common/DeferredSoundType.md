# DeferredSoundType

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class
**Extends:** `SoundType`

## Description

A subclass of `SoundType` that uses `Supplier<SoundEvent>`s.



This class allows mod developers to safely create custom `SoundType`s for use in their e.g. `Block`.



The problem with using `SoundType` directly is it requires `SoundEvent` instances directly, because
`SoundType`s are required to be present during `Block` creation and registration. However,
`SoundEvent` must also be registered.



A possible solution of initializing `SoundEvent`s first would require static initialization of the
`SoundEvent` instances and later registration, which goes against the contract of the registry system and
prevents the use of `DeferredRegister` and `DeferredHolder`s.



This class offers an alternative and preferable solution, by allowing mods to create `SoundType`s using
`Supplier`s of `SoundEvent`s instead, which do not require static initialization of `SoundEvent`s
and allow the direct use of `RegistryObject`s.
@see SoundType

## Methods

### DeferredSoundType

```java
public DeferredSoundType(float volumeIn, float pitchIn, Supplier<SoundEvent> breakSoundIn, Supplier<SoundEvent> stepSoundIn, Supplier<SoundEvent> placeSoundIn, Supplier<SoundEvent> hitSoundIn, Supplier<SoundEvent> fallSoundIn)
```

**Parameters:**

- `volumeIn` (`float`)
- `pitchIn` (`float`)
- `breakSoundIn` (`Supplier<SoundEvent>`)
- `stepSoundIn` (`Supplier<SoundEvent>`)
- `placeSoundIn` (`Supplier<SoundEvent>`)
- `hitSoundIn` (`Supplier<SoundEvent>`)
- `fallSoundIn` (`Supplier<SoundEvent>`)

**Returns:** `public`

### getBreakSound

```java
public SoundEvent getBreakSound()
```

**Returns:** `SoundEvent`

### getStepSound

```java
public SoundEvent getStepSound()
```

**Returns:** `SoundEvent`

### getPlaceSound

```java
public SoundEvent getPlaceSound()
```

**Returns:** `SoundEvent`

### getHitSound

```java
public SoundEvent getHitSound()
```

**Returns:** `SoundEvent`

### getFallSound

```java
public SoundEvent getFallSound()
```

**Returns:** `SoundEvent`
