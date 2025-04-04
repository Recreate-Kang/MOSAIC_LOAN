package com.mosaic.loan.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.mosaic.loan.dto.CreateLoanRequestDto;
import com.mosaic.loan.service.LoanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("loans")
public class LoanController {

    LoanService loanService;

    @PostMapping("")
    public ResponseEntity<Void> requestLoan(CreateLoanRequestDto createLoanRequestDto) throws JsonProcessingException {
        loanService.createLoan(createLoanRequestDto);
        return ResponseEntity.accepted().build();
    }




    @PostMapping("B")
    public ResponseEntity<?> repayLoan() {
        return null;
    }

    //TODO 내 대출내역 확인
    @GetMapping("C")
    public ResponseEntity<?> getLoans() {
        return null;
    }

    //TODO 내 개별 투자의 거래내역 확인
    @GetMapping("D")
    public ResponseEntity<?> getLoanTransactions() {
        return null;
    }
}
