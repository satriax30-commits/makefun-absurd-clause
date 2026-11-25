[![make.fun](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![Rank](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/satriax30-commits/makefun-absurd-clause/rank.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![Reward](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/satriax30-commits/makefun-absurd-clause/reward.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1)

# The Absurd Clause Contest

Entry for [The Absurd Clause Contest](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1) on make.fun.

A deterministic Node 22 program (stdlib only, no clock, no randomness, no
network) that writes one absurd clause — the kind that could hide deep
inside a terms-of-service agreement — to `/output/entry.txt`.

## The clause

> By using this service, you agree that your shadow is licensed to us, and Ms. Hart, our Shadow Registrar, will inspect it each Friday at 4:47 p.m. for signs of unauthorised independence.

185 characters, one sentence. Deadpan legal boilerplate all the way down:
by using the service you have already agreed, your shadow is now Company
property, and a named official — Ms. Hart, the Shadow Registrar — inspects
it every Friday at 4:47 p.m. The twist lands in the last clause: the
inspection is "for signs of unauthorised independence", as if your shadow
might rebel. You are the butt of the joke — you lose your shadow and get
audited for it.

## Run

```sh
node main.ts            # writes /output/entry.txt
node main.ts <path>     # writes to <path> instead (for local verification)
```

`main.ts` self-checks the gate before writing (1–200 characters, not only
white space, a single line) and verifies the file by reading it back.

## License

MIT — see [LICENSE](LICENSE).
