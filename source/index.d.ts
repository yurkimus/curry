type Unary<F extends (p0: any) => any, P extends Parameters<F>, R = ReturnType<F>> = (p0: P[0]) => R

type Binary<F extends (p0: any, p1: any) => any, P extends Parameters<F>, R = ReturnType<F>> = {
  (p0: P[0]): (p1: P[1]) => R

  (p0: P[0], p1: P[1]): R
}

type BinaryCropped<F extends (p0: any, p1: any) => any, P extends Parameters<F>, R = ReturnType<F>> = {
  (p0: P[0], p1: P[1]): R
}

type Ternary<F extends (p0: any, p1: any, p2: any) => any, P extends Parameters<F>, R = ReturnType<F>> = {
  (p0: P[0]): {
    (p1: P[1]): (p2: P[2]) => R

    (p1: P[1], p2: P[2]): R
  }

  (p0: P[0], p1: P[1]): (p2: P[2]) => R

  (p0: P[0], p1: P[1], p2: P[2]): R
}

type TernaryCropped<F extends (p0: any, p1: any, p2: any) => any, P extends Parameters<F>, R = ReturnType<F>> = {
  (p0: P[0]): (p1: P[1], p2: P[2]) => R

  (p0: P[0], p1: P[1], p2: P[2]): R
}

export let curry: {
  <Predicate extends (p0: any, p1: any, p2: any) => any>(
    predicate: Predicate,
    length: 3,
  ): Ternary<Predicate, Parameters<Predicate>>

  <Predicate extends (p0: any, p1: any) => any>(
    predicate: Predicate,
    length: 2,
  ): Binary<Predicate, Parameters<Predicate>>

  <Predicate extends (p0: any, p1: any, p2: any) => any>(
    predicate: Predicate,
    length: 2,
  ): TernaryCropped<Predicate, Parameters<Predicate>>

  <Predicate extends (p0: any, p1: any) => any>(
    predicate: Predicate,
    length: 1,
  ): BinaryCropped<Predicate, Parameters<Predicate>>

  <Predicate extends (p0: any) => any>(
    predicate: Predicate,
    length: 1,
  ): Unary<Predicate, Parameters<Predicate>>
}
